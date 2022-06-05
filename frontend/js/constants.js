const contractAddress = "0x2E29F37c5942976202F95dF175DCc28DAd17D461"; //Replace with your own contract address
const chain = 'mainnet'; // rinkeby or polygon or mainnet

const welcome_h1 = "Welcome to the AI DND NFT Project!!";
const welcome_h2 = "Connect to MetaMask to Get Started";
const welcome_p = 'The AI DND Genesis NFT Project is 894 AI generated oil painting of all the fantasy races living in the Dungeons and Dragons (DND) metaverse. CC0 original art, series 0 Genesis project. 50 percent of the income goes directly to the AI platform and artist.  Enjoy the Ride!.';
const h1_presale_coming_soon = "NFT Drop Coming Soon!!";
const h1_presale_mint = "Pre-Sale Minting Open!!";
const h1_public_mint = "Public Minting Open!!";
const h2_presale_coming_soon = "Pre-Sale Minting Countdown";
const h2_presale_mint = "Public Minting Countdown";
const p_presale_coming_soon = "We are working hard to launch the NFT Collection. Stay tuned for updates!";
const p_presale_mint_not_whitelisted = "You are not whitelisted for the pre-sale.. 😢";
const p_presale_mint_whitelisted = "You're on the whitelist for the pre-sale! 🎉";
const p_presale_mint_already_minted = "You've already claimed your whitelist mint. Thank you! 🎉";
const p_public_mint = "No whitelist needed. Public minting is now open! 🎉";
const button_presale_coming_soon = "Get on the Whitelist";
const button_presale_mint_whitelisted = "Mint Your Special NFT";
const button_presale_mint_not_whitelisted = "Get on the Whitelist";
const button_presale_already_minted = "Join The Community";
const button_public_mint = "Mint Your NFT";
const mint_failed = "Minting failed. 😢 Please try again.";

const abi = [
  {"inputs":[{"internalType":"string","name":"baseURI","type":"string"}], 
   "stateMutability":"nonpayable","type":"constructor"},
   {"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},
   {
    inputs: [],
    name: "getInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "version",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "maxSupply",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mintPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokensPerMint",
                type: "uint256",
              },
              {
                internalType: "address payable",
                name: "treasuryAddress",
                type: "address",
              },
            ],
            internalType: "struct NFTCollection.DeploymentConfig",
            name: "deploymentConfig",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "string",
                name: "baseURI",
                type: "string",
              },
              {
                internalType: "bool",
                name: "metadataUpdatable",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "publicMintStart",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "presaleMintStart",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "prerevealTokenURI",
                type: "string",
              },
              {
                internalType: "bytes32",
                name: "presaleMerkleRoot",
                type: "bytes32",
              },
            ],
            internalType: "struct NFTCollection.RuntimeConfig",
            name: "runtimeConfig",
            type: "tuple",
          },
        ],
        internalType: "struct NFTCollection.ContractInfo",
        name: "info",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "maxSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mintPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokensPerMint",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "treasuryAddress",
            type: "address",
          },
        ],
        internalType: "struct NFTCollection.DeploymentConfig",
        name: "deploymentConfig",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "baseURI",
            type: "string",
          },
          {
            internalType: "bool",
            name: "metadataUpdatable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "publicMintStart",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "presaleMintStart",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "prerevealTokenURI",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "presaleMerkleRoot",
            type: "bytes32",
          },
        ],
        internalType: "struct NFTCollection.RuntimeConfig",
        name: "runtimeConfig",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },   
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "baseURI",
            type: "string",
          },
          {
            internalType: "bool",
            name: "metadataUpdatable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "publicMintStart",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "presaleMintStart",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "prerevealTokenURI",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "presaleMerkleRoot",
            type: "bytes32",
          },
        ],
        internalType: "struct NFTCollection.RuntimeConfig",
        name: "newConfig",
        type: "tuple",
      },
    ],
    name: "updateConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  }, 
   {"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_FREE_MINT_PER_WALLET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PUBLIC_MINT_PER_WALLET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TEAM_CLAIM_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipFreeMintActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipPublicSaleActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"freeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"freeMintActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"freeMintClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"freeMintCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"numberMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numberToMint","type":"uint256"}],"name":"ownerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_numberToMint","type":"uint256"}],"name":"ownerMintToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"setFreeMintCount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_num","type":"uint256"}],"name":"setTotalFreeMintNum","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_free_mints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawFundsToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"}]

