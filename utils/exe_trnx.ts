import Web3, { ContractAbi } from "web3";
import { Contract } from "web3-eth-contract";
import { TransactionReceipt } from "web3";

const executeTransaction = async(tx: any, web3: Web3, contract: Contract<ContractAbi>, networkId: number, signerAddress: string, signerPrivateKey: string) : Promise<TransactionReceipt> => {
    try {
        const gasBigInt = await tx.estimateGas({from: signerAddress});
        const gas = parseInt(gasBigInt.toString());

        const gasPriceBigInt = await web3.eth.getGasPrice();
        const gasPrice = parseInt(gasPriceBigInt.toString());
        
        const data = tx.encodeABI();
        const nonceBigInt = await web3.eth.getTransactionCount(signerAddress);
        const nonceString = nonceBigInt.toString();
        const nonce = parseInt(nonceString);

        console.log(contract.options.address, data, gas, gasPrice, nonce, networkId)
        
        const signedTx = await web3.eth.accounts.signTransaction(
            {
                to: contract.options.address,
                gas,
                gasPrice,
                nonce
            },
            signerPrivateKey
        );
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction as string);
            
        return receipt;
    } catch (error) {console.error(error); throw error;}
}

export default executeTransaction;