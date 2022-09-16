import { ethers } from "ethers";
import { tokenABI } from "../abi/stronks";

let provider = new ethers.providers.JsonRpcProvider(
  "https://rpc03-sg.dogechain.dog"
);

let stronksAddress = "0x2E2F0ee0aE2014359aaF51099b90C6Ec692aeB65";

let instance = new ethers.Contract(stronksAddress, tokenABI, provider);

// // CC Contract
// //WRITE
// export const mint = async (amount) => {
//   try {
//     let newContract = new ethers.Contract(CC.address, CC.abi, getSigner());

//     let tx = await newContract.buy(amount);

//     let result = await tx.wait();

//     return { success: true, result };
//   } catch (error) {
//     return { success: false, error };
//   }
// };

// export const refund = async (tokenId, amount) => {
//   try {
//     let newContract = new ethers.Contract(CC.address, CC.abi, getSigner());

//     let tx = await newContract.refund(
//       tokenId,
//       ethers.utils.parseUnits(amount, 6)
//     );

//     let result = await tx.wait();

//     return { success: true, result };
//   } catch (error) {
//     return { success: false, error };
//   }
// };

//READ
export const getSupply = async () => {
  try {
    let getCirculatingSupply = await instance.getCirculatingSupply();
    let totalSupply = await instance.totalSupply();

    return {
      success: true,
      result: {
        getCirculatingSupply: Number(
          ethers.utils.formatUnits(getCirculatingSupply, 18)
        ),
        totalSupply: Number(ethers.utils.formatUnits(totalSupply, 18)),
      },
    };
  } catch (error) {
    return { success: false, error };
  }
};

export const getNextRebase = async () => {
  try {
    let nextRebase = await instance.nextRebase();

    return {
      success: true,
      result: {
        nextRebase: Number(nextRebase),
      },
    };
  } catch (error) {
    return { success: false, error };
  }
};

export const getBalances = async (userAddress) => {
  try {
    let tokenBalance = await instance.balanceOf(userAddress);
    let dogeBalance = await provider.getBalance(userAddress);

    return {
      tokenBalance: Number(ethers.utils.formatEther(tokenBalance)),
      dogeBalance: Number(ethers.utils.formatEther(dogeBalance)),
    };
  } catch (error) {
    console.log(error);
  }
};

// export const walletOfOwner = async (userAddress) => {
//   try {
//     let ids = [];
//     let NFTs = await CCInstance.walletOfOwner(userAddress);

//     await Promise.all(
//       NFTs.map(async (el) => {
//         let info = await getTokenData(el);
//         if (info.usdtAvailable === 0) {
//           return;
//         }
//         ids.push({
//           ...info,
//           edition: Number(el),
//         });
//       })
//     );

//     ids.sort(function (a, b) {
//       return a.edition - b.edition;
//     });

//     let { cTokenBalance, maticBalance } = await getBalances(userAddress);

//     return {
//       success: true,
//       result: {
//         NFTs: ids,
//         cTokenBalance,
//         maticBalance,
//       },
//     };
//   } catch (error) {
//     return { success: false, error };
//   }
// };

// export const getTokenData = async (tokenId) => {
//   try {
//     let usdtAvailable = await CCInstance.usdtAvailable(tokenId);
//     let usdtLocked = await CCInstance.usdtLocked(tokenId);
//     let claimableCToken = await MasterContractInstance.getCTokens(tokenId);

//     return {
//       usdtAvailable: Number(ethers.utils.formatUnits(usdtAvailable, 6)),
//       isOnMatch: Number(ethers.utils.formatUnits(usdtLocked, 6)),
//       claimableCTokens: Number(claimableCToken),
//       attributes: traits[tokenId].attributes,
//     };
//   } catch (error) {
//     return error;
//   }
// };

// // USDT Contract

// export const approveUSDT = async () => {
//   try {
//     let newContract = new ethers.Contract(USDT.address, USDT.abi, getSigner());

//     let tx = await newContract.approve(CC.address, ethers.constants.MaxUint256);

//     let result = await tx.wait();

//     return { success: true, result };
//   } catch (error) {
//     return { success: false, error };
//   }
// };

// export const isApproved = async (userAddress) => {
//   try {
//     let allowance = await USDTInstance.allowance(userAddress, CC.address);

//     return Number(allowance) > 0;
//   } catch (error) {
//     throw error;
//   }
// };

// // Master Contract
// // WRITE
// export const createMatch = async (tokenId, price) => {
//   try {
//     let newContract = new ethers.Contract(
//       MasterContract.address,
//       MasterContract.abi,
//       getSigner()
//     );

//     let tx = await newContract.createMatch(
//       tokenId,
//       ethers.utils.parseUnits(price, 6)
//     );

//     let result = await tx.wait();

//     return { success: true, result };
//   } catch (error) {
//     return { success: false, error };
//   }
// };

// export const cancelMatch = async (tokenId) => {
//   try {
//     let newContract = new ethers.Contract(
//       MasterContract.address,
//       MasterContract.abi,
//       getSigner()
//     );

//     let tx = await newContract.cancelMatch(tokenId);

//     let result = await tx.wait();

//     return { success: true, result };
//   } catch (error) {
//     return { success: false, error };
//   }
// };

// export const acceptFight = async (userAddress, tokenId) => {
//   try {
//     let signer = getSigner();
//     const hash = await ethers.utils.keccak256(userAddress, tokenId);
//     const message = ethers.utils.arrayify(hash);
//     let signature = await signer.signMessage(message);

//     return { success: true, result: signature };
//   } catch (error) {
//     return { success: false, error };
//   }
// };

// export const claimCtoken = async (tokenIds) => {
//   try {
//     let newContract = new ethers.Contract(
//       MasterContract.address,
//       MasterContract.abi,
//       getSigner()
//     );

//     let tx = await newContract.claimCtoken(tokenIds);

//     let result = await tx.wait();

//     return { success: true, result };
//   } catch (error) {
//     return { success: false, error };
//   }
// };

// // fight (uint256 tokenId, uint256 oponent, uint256 num)  // BACKEND
// // READ

// export const getCTokens = async (userAddress) => {
//   try {
//     let result = await MasterContractInstance.getCTokens(userAddress);

//     return { success: true, result: Number(result) };
//   } catch (error) {
//     return { success: false, error };
//   }
// };

// export const getActiveMatchs = async () => {
//   try {
//     let result = await MasterContractInstance.getActiveMatchs();

//     let matchs = orderMatchsData(result);

//     return { success: true, result: matchs };
//   } catch (error) {
//     return { success: false, error };
//   }
// };

// // Signer

// const getSigner = () => {
//   let newProvider = new ethers.providers.Web3Provider(window.ethereum);
//   return newProvider.getSigner(0);
// };

// const orderMatchsData = (data) => {
//   let newMatchs = [];
//   const { matchs, results } = data;
//   matchs.map((el, index) => {
//     let newData = {
//       edition: Number(el.tokenId),
//       price: Number(ethers.utils.formatUnits(el.price, 6)),
//       user: el.creator,
//       userWins: Number(results[index].wins),
//       userLose: Number(results[index].loses),
//       createdAt: Number(el.createdAt),
//     };
//     newMatchs.push(newData);
//   });

//   newMatchs.sort(function (a, b) {
//     return a.createdAt - b.createdAt;
//   });

//   return newMatchs;
// };
