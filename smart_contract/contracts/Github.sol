// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// import "hardhat/console.sol";

contract Github {
    uint issueCount;

    event Transfer(address from, address receiver, uint amount, string issue, string description);

    struct TryingStruct {
        address user;
        string username;
        bool status;
        bool claimed;
    }
  
    struct IssuesStruct {
        uint idnum;
        address sender;
        string username;
        string repourl;
        string issue;
        string desc;
        uint amount;
        bool status;
        address solvedUser;
        string solvedUsername;
        bool claimed;
        TryingStruct[] users;
    }

    mapping(uint256 => IssuesStruct) public issues;

    function addIssue(string memory _username, string memory _repourl, string memory _issue, string memory _desc, uint _amount) public {
        IssuesStruct storage issue = issues[issueCount];
        issue.idnum=issueCount;
        issueCount += 1;
        issue.sender=msg.sender;
        issue.username=_username;
        issue.repourl=_repourl;
        issue.issue=_issue;
        issue.desc=_desc;
        issue.amount=_amount;
        issue.claimed=false;
    }

    function getAllIssues() public view returns (IssuesStruct[] memory) {
        IssuesStruct[] memory allIssues = new IssuesStruct[](issueCount);

        for(uint i = 0; i < issueCount; i++) {
            allIssues[i] = issues[i];
        }

        return allIssues;
    }

    function getMyIssues() public view returns (IssuesStruct[] memory) {
        IssuesStruct[] memory ret=new IssuesStruct[](issueCount);
        uint it=0;
        for(uint i = 0; i < issueCount; i++) {
            if(msg.sender==issues[i].sender){
                ret[it]=issues[i];
                it++;
            }
        }
        return ret;
    }

    function getOpenIssues() public view returns (IssuesStruct[] memory) {
        IssuesStruct[] memory ret=new IssuesStruct[](issueCount);
        uint it=0;
        for(uint i = 0; i < issueCount; i++) {
            if(issues[i].status==false){
                ret[it]=issues[i];
                it++;
            }
        }
        return ret;
    }

    function getClosedIssues() public view returns (IssuesStruct[] memory) {
        IssuesStruct[] memory ret=new IssuesStruct[](issueCount);
        uint it=0;
        for(uint i = 0; i < issueCount; i++) {
            if(issues[i].status==true){
                ret[it]=issues[i];
                it++;
            }
        }
        return ret;
    }

    function requestIssue(uint _id, string memory _username) public {
        issues[_id].users.push(TryingStruct(msg.sender,_username,false,false));
    }

    function ClaimIssue(address payable receiver, uint _id) public {
        
        address Sender= issues[_id].sender;
        uint amt=issues[_id].amount;
        emit Transfer(Sender, receiver, amt, issues[_id].issue, issues[_id].desc);
        issues[_id].claimed=true;
    }

    function MarkComplete(uint _id, string memory _username) public returns(bool) {
        issues[_id].status=true;
        issues[_id].solvedUsername=_username;
        issues[_id].solvedUser=msg.sender;
        uint len=issues[_id].users.length;

        for(uint i=0; i < len; i++){
            if(msg.sender==issues[_id].users[i].user){
                issues[_id].users[i].status=true;
                return true;
            }
        }
        return false;
    }


    function getMyCompletedIssues() public view returns(IssuesStruct[] memory){
        IssuesStruct[] memory ret=new IssuesStruct[](issueCount);
        uint it=0;

        for(uint i=0; i < issueCount; i++){
            if(msg.sender==issues[i].solvedUser){
                ret[it]=issues[i];
                it++;
            }
        }
        return ret;
    }

    function getMyTryingIssues() public view returns(IssuesStruct[] memory){
        IssuesStruct[] memory ret=new IssuesStruct[](issueCount);

        uint it=0;
        for(uint j=0;j<issueCount;j++){
            uint len=issues[j].users.length;
            if(issues[j].status==true){
                continue;
            }
            for(uint i=0; i < len; i++){
                if(msg.sender==issues[j].users[i].user){
                    ret[it]=issues[j];
                    it++;
                }
            }
        }
    
        return ret;
    }

    function getIssuesCount() public view returns (uint) {
        return issueCount;
    }

}