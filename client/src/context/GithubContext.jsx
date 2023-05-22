import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const GithubContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const GithubContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return GithubContract;
};

export const TransactionsProvider = ({ children }) => {
  const emptyadd = "0x0000000000000000000000000000000000000000";
  const [formData, setformData] = useState({
    username: "",
    repourl: "",
    issue: "",
    desc: "",
    amount: "",
  });
  const [tryFormData, setTryformData] = useState({ tryusername: "" });
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [issueCount, setIssueCount] = useState(
    localStorage.getItem("IssueCount")
  );
  const [issues, setIssues] = useState([]);
  const [myIssues, setMyIssues] = useState([]);
  const [myTryingIssues, setMyTryingIssues] = useState([]);
  const [myCompletedIssues, setMyCompletedIssues] = useState([]);
  //const userAddress = ethereum.selectedAddress;
  const userAddress = currentAccount;

  const checkAdd = (add) => {
    if (add === emptyadd) {
      return true;
    }
    return false;
  };

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const handleChange2 = (e, name) => {
    setTryformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllIssues = async () => {
    console.log("function called");
    try {
      if (ethereum) {
        const githubContract = createEthereumContract();

        const availableAllIssues = await githubContract.getOpenIssues();

        var len = availableAllIssues.length;
        var structuredAllIssues = [];
        for (var i = 0; i < len; i++) {
          if (checkAdd(availableAllIssues[i].sender)) {
            break;
          } else {
            var dumm = {
              id: parseInt(availableAllIssues[i].idnum._hex, 16),
              Issuer: availableAllIssues[i].sender,
              username: availableAllIssues[i].username,
              repourl: availableAllIssues[i].repourl,
              issue: availableAllIssues[i].issue,
              desc: availableAllIssues[i].desc,
              amount: parseInt(availableAllIssues[i].amount._hex) / 10 ** 18,
              status: availableAllIssues[i].status,
              solvedUser: availableAllIssues[i].solvedUser,
              solvedUsername: availableAllIssues[i].solvedUsername,
              claimed: availableAllIssues[i].claimed,
              usersTrying: availableAllIssues[i].users,
              //timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
            };
            structuredAllIssues.push(dumm);
          }
        }
        console.log(structuredAllIssues);
        //console.log(structuredMyIssues);

        setIssues(structuredAllIssues);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMyIssues = async () => {
    console.log("function called");
    try {
      if (ethereum) {
        const githubContract = createEthereumContract();

        const availableMyIssues = await githubContract.getMyIssues();

        var len = availableMyIssues.length;
        var structuredMyIssues = [];
        for (var i = 0; i < len; i++) {
          if (checkAdd(availableMyIssues[i].sender)) {
            break;
          } else {
            var dumm = {
              id: parseInt(availableMyIssues[i].idnum._hex, 16),
              Issuer: availableMyIssues[i].sender,
              username: availableMyIssues[i].username,
              repourl: availableMyIssues[i].repourl,
              issue: availableMyIssues[i].issue,
              desc: availableMyIssues[i].desc,
              amount: parseInt(availableMyIssues[i].amount._hex) / 10 ** 18,
              status: availableMyIssues[i].status,
              solvedUser: availableMyIssues[i].solvedUser,
              solvedUsername: availableMyIssues[i].solvedUsername,
              claimed: availableMyIssues[i].claimed,
              usersTrying: availableMyIssues[i].users,
              //timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
            };
            structuredMyIssues.push(dumm);
          }
        }
        console.log(structuredMyIssues);
        //console.log(structuredMyIssues);

        setMyIssues(structuredMyIssues);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMyTryingIssues = async () => {
    console.log("function called");
    try {
      if (ethereum) {
        const githubContract = createEthereumContract();

        const availableMyTryingIssues =
          await githubContract.getMyTryingIssues();
        console.log(availableMyTryingIssues);
        var len = availableMyTryingIssues.length;
        var structuredMyTryingIssues = [];
        for (var i = 0; i < len; i++) {
          if (checkAdd(availableMyTryingIssues[i].sender)) {
            break;
          } else {
            var dumm = {
              id: parseInt(availableMyTryingIssues[i].idnum._hex, 16),
              Issuer: availableMyTryingIssues[i].sender,
              username: availableMyTryingIssues[i].username,
              repourl: availableMyTryingIssues[i].repourl,
              issue: availableMyTryingIssues[i].issue,
              desc: availableMyTryingIssues[i].desc,
              amount:
                parseInt(availableMyTryingIssues[i].amount._hex) / 10 ** 18,
              status: availableMyTryingIssues[i].status,
              solvedUser: availableMyTryingIssues[i].solvedUser,
              solvedUsername: availableMyTryingIssues[i].solvedUsername,
              claimed: availableMyTryingIssues[i].claimed,
              usersTrying: availableMyTryingIssues[i].users,
              //timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
            };
            structuredMyTryingIssues.push(dumm);
          }
        }
        console.log(structuredMyTryingIssues);
        //console.log(structuredMyIssues);

        setMyTryingIssues(structuredMyTryingIssues);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMyCompletedIssues = async () => {
    console.log("function called");
    try {
      if (ethereum) {
        const githubContract = createEthereumContract();

        const availableMyCompletedIssues =
          await githubContract.getMyCompletedIssues();
        console.log(availableMyCompletedIssues);
        var len = availableMyCompletedIssues.length;
        var structuredMyCompletedIssues = [];
        for (var i = 0; i < len; i++) {
          if (checkAdd(availableMyCompletedIssues[i].sender)) {
            break;
          } else {
            var dumm = {
              id: parseInt(availableMyCompletedIssues[i].idnum._hex, 16),
              Issuer: availableMyCompletedIssues[i].sender,
              username: availableMyCompletedIssues[i].username,
              repourl: availableMyCompletedIssues[i].repourl,
              issue: availableMyCompletedIssues[i].issue,
              desc: availableMyCompletedIssues[i].desc,
              amount:
                parseInt(availableMyCompletedIssues[i].amount._hex) / 10 ** 18,
              status: availableMyCompletedIssues[i].status,
              solvedUser: availableMyCompletedIssues[i].solvedUser,
              solvedUsername: availableMyCompletedIssues[i].solvedUsername,
              claimed: availableMyCompletedIssues[i].claimed,
              usersTrying: availableMyCompletedIssues[i].users,
              //timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
            };
            structuredMyCompletedIssues.push(dumm);
          }
        }
        console.log(structuredMyCompletedIssues);
        //console.log(structuredMyIssues);

        setMyCompletedIssues(structuredMyCompletedIssues);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        getAllIssues();
        getMyIssues();
        getMyTryingIssues();
        getMyCompletedIssues();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfIssuesExists = async () => {
    try {
      if (ethereum) {
        const issueContract = createEthereumContract();
        const currentIssueCount = await issueContract.getIssuesCount();

        window.localStorage.setItem("IssueCount", currentIssueCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const sendIssue = async () => {
    try {
      if (ethereum) {
        const { username, repourl, issue, desc, amount } = formData;
        const issueContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        const issueHash = await issueContract.addIssue(
          username,
          repourl,
          issue,
          desc,
          parsedAmount
        );

        setIsLoading(true);
        console.log(`Loading - ${issueHash.hash}`);
        await issueHash.wait();
        console.log(`Success - ${issueHash.hash}`);
        setIsLoading(false);

        const issueCount = await issueContract.getIssuesCount();

        setIssueCount(issueCount.toNumber());
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const sendTryRequest = async (i_d) => {
    try {
      if (ethereum) {
        const { tryusername } = tryFormData;
        //console.log(i_d);
        //console.log(tryusername);
        const issueContract = createEthereumContract();
        //const user_name="checking function";
        const issueHash = await issueContract.requestIssue(i_d, tryusername);

        setIsLoading(true);
        console.log(`Loading - ${issueHash.hash}`);
        await issueHash.wait();
        console.log(`Success - ${issueHash.hash}`);
        setIsLoading(false);

        const issueCount = await issueContract.getIssuesCount();

        setIssueCount(issueCount.toNumber());
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const MarkComplete = async (i_d, _username) => {
    try {
      if (ethereum) {
        const issueContract = createEthereumContract();
        const issueHash = await issueContract.MarkComplete(i_d, _username);
        console.log(issueHash);
        setIsLoading(true);
        console.log(`Loading - ${issueHash.hash}`);
        await issueHash.wait();
        console.log(`Success - ${issueHash.hash}`);
        setIsLoading(false);

        const issueCount = await issueContract.getIssuesCount();

        setIssueCount(issueCount.toNumber());
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const ClaimAmount = async (i_d, amount, toAddress) => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        console.log("created");
        const parsedAmount = ethers.utils.parseEther(amount.toString());
        console.log("passed");
        console.log(toAddress);
        console.log(i_d);
        console.log(currentAccount);
        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: currentAccount,
              to: toAddress,
              gas: "0x5208",
              value: parsedAmount._hex,
            },
          ],
        });

        const transactionHash = await transactionsContract.ClaimIssue(
          toAddress,
          i_d
        );

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);

        const issueCount = await transactionsContract.getIssuesCount();

        setIssueCount(issueCount.toNumber());
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
    checkIfIssuesExists();
  }, [issueCount]);

  return (
    <GithubContext.Provider
      value={{
        issueCount,
        connectWallet,
        issues,
        myIssues,
        myTryingIssues,
        myCompletedIssues,
        currentAccount,
        isLoading,
        sendIssue,
        sendTryRequest,
        MarkComplete,
        ClaimAmount,
        //sendTransaction,
        handleChange,
        handleChange2,
        formData,
        tryFormData,
        setTryformData,
        userAddress,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
