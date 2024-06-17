import {
  FundsDistributed as FundsDistributedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProgressReviewed as ProgressReviewedEvent,
  ProgressUpdated as ProgressUpdatedEvent,
  ProjectCreated as ProjectCreatedEvent,
  ProjectFunded as ProjectFundedEvent,
  RefundIssued as RefundIssuedEvent
} from "../generated/FrogFund/FrogFund"
import {
  FundsDistributed,
  OwnershipTransferred,
  ProgressReviewed,
  ProgressUpdated,
  ProjectCreated,
  ProjectFunded,
  RefundIssued
} from "../generated/schema"

export function handleFundsDistributed(event: FundsDistributedEvent): void {
  let entity = new FundsDistributed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.projectId = event.params.projectId
  entity.amount = event.params.amount
  entity.isEth = event.params.isEth

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProgressReviewed(event: ProgressReviewedEvent): void {
  let entity = new ProgressReviewed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.projectId = event.params.projectId
  entity.comment = event.params.comment
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProgressUpdated(event: ProgressUpdatedEvent): void {
  let entity = new ProgressUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.projectId = event.params.projectId
  entity.progress = event.params.progress
  entity.details = event.params.details

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProjectCreated(event: ProjectCreatedEvent): void {
  let entity = new ProjectCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.projectId = event.params.projectId
  entity.creator = event.params.creator
  entity._description = event.params._description
  entity._link = event.params._link
  entity.goalAmount = event.params.goalAmount
  entity.deadline = event.params.deadline

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProjectFunded(event: ProjectFundedEvent): void {
  let entity = new ProjectFunded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.projectId = event.params.projectId
  entity.supporter = event.params.supporter
  entity.amount = event.params.amount
  entity.isEth = event.params.isEth

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRefundIssued(event: RefundIssuedEvent): void {
  let entity = new RefundIssued(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.projectId = event.params.projectId
  entity.supporter = event.params.supporter
  entity.amount = event.params.amount
  entity.isEth = event.params.isEth

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
