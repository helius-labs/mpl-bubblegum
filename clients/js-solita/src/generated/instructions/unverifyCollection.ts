/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { MetadataArgs, metadataArgsBeet } from '../types/MetadataArgs';

/**
 * @category Instructions
 * @category UnverifyCollection
 * @category generated
 */
export type UnverifyCollectionInstructionArgs = {
  root: number[] /* size: 32 */;
  dataHash: number[] /* size: 32 */;
  creatorHash: number[] /* size: 32 */;
  nonce: beet.bignum;
  index: number;
  message: MetadataArgs;
};
/**
 * @category Instructions
 * @category UnverifyCollection
 * @category generated
 */
export const unverifyCollectionStruct = new beet.FixableBeetArgsStruct<
  UnverifyCollectionInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['root', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['dataHash', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['creatorHash', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['nonce', beet.u64],
    ['index', beet.u32],
    ['message', metadataArgsBeet],
  ],
  'UnverifyCollectionInstructionArgs',
);
/**
 * Accounts required by the _unverifyCollection_ instruction
 *
 * @property [] treeAuthority
 * @property [] leafOwner
 * @property [] leafDelegate
 * @property [_writable_] merkleTree
 * @property [**signer**] payer
 * @property [] treeDelegate
 * @property [**signer**] collectionAuthority
 * @property [] collectionAuthorityRecordPda
 * @property [] collectionMint
 * @property [_writable_] collectionMetadata
 * @property [] editionAccount
 * @property [] bubblegumSigner
 * @property [] logWrapper
 * @property [] compressionProgram
 * @property [] tokenMetadataProgram
 * @category Instructions
 * @category UnverifyCollection
 * @category generated
 */
export type UnverifyCollectionInstructionAccounts = {
  treeAuthority: web3.PublicKey;
  leafOwner: web3.PublicKey;
  leafDelegate: web3.PublicKey;
  merkleTree: web3.PublicKey;
  payer: web3.PublicKey;
  treeDelegate: web3.PublicKey;
  collectionAuthority: web3.PublicKey;
  collectionAuthorityRecordPda: web3.PublicKey;
  collectionMint: web3.PublicKey;
  collectionMetadata: web3.PublicKey;
  editionAccount: web3.PublicKey;
  bubblegumSigner: web3.PublicKey;
  logWrapper: web3.PublicKey;
  compressionProgram: web3.PublicKey;
  tokenMetadataProgram: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const unverifyCollectionInstructionDiscriminator = [250, 251, 42, 106, 41, 137, 186, 168];

/**
 * Creates a _UnverifyCollection_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UnverifyCollection
 * @category generated
 */
export function createUnverifyCollectionInstruction(
  accounts: UnverifyCollectionInstructionAccounts,
  args: UnverifyCollectionInstructionArgs,
  programId = new web3.PublicKey('BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY'),
) {
  const [data] = unverifyCollectionStruct.serialize({
    instructionDiscriminator: unverifyCollectionInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.treeAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.leafOwner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.leafDelegate,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.merkleTree,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.treeDelegate,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.collectionAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.collectionAuthorityRecordPda,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.collectionMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.collectionMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.editionAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.bubblegumSigner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.logWrapper,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.compressionProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMetadataProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc);
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}