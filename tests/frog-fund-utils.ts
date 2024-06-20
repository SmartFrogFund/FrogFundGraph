import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  FundsDistributed,
  OwnershipTransferred,
  ProgressReviewed,
  ProgressUpdated,
  ProjectCreated,
  ProjectFunded,
  RefundIssued
} from "../generated/FrogFund/FrogFund"

export function createFundsDistributedEvent(
  projectId: BigInt,
  amount: BigInt,
  isEth: boolean
): FundsDistributed {
  let fundsDistributedEvent = changetype<FundsDistributed>(newMockEvent())

  fundsDistributedEvent.parameters = new Array()

  fundsDistributedEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromUnsignedBigInt(projectId)
    )
  )
  fundsDistributedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fundsDistributedEvent.parameters.push(
    new ethereum.EventParam("isEth", ethereum.Value.fromBoolean(isEth))
  )

  return fundsDistributedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProgressReviewedEvent(
  projectId: BigInt,
  comment: string,
  approved: boolean
): ProgressReviewed {
  let progressReviewedEvent = changetype<ProgressReviewed>(newMockEvent())

  progressReviewedEvent.parameters = new Array()

  progressReviewedEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromUnsignedBigInt(projectId)
    )
  )
  progressReviewedEvent.parameters.push(
    new ethereum.EventParam("comment", ethereum.Value.fromString(comment))
  )
  progressReviewedEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return progressReviewedEvent
}

export function createProgressUpdatedEvent(
  projectId: BigInt,
  progress: BigInt,
  details: string
): ProgressUpdated {
  let progressUpdatedEvent = changetype<ProgressUpdated>(newMockEvent())

  progressUpdatedEvent.parameters = new Array()

  progressUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromUnsignedBigInt(projectId)
    )
  )
  progressUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "progress",
      ethereum.Value.fromUnsignedBigInt(progress)
    )
  )
  progressUpdatedEvent.parameters.push(
    new ethereum.EventParam("details", ethereum.Value.fromString(details))
  )

  return progressUpdatedEvent
}

export function createProjectCreatedEvent(
  projectId: BigInt,
  creator: Address,
  _description: string,
  _link: string,
  _title: string,
  goalAmount: BigInt,
  deadline: BigInt
): ProjectCreated {
  let projectCreatedEvent = changetype<ProjectCreated>(newMockEvent())

  projectCreatedEvent.parameters = new Array()

  projectCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromUnsignedBigInt(projectId)
    )
  )
  projectCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  projectCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_description",
      ethereum.Value.fromString(_description)
    )
  )
  projectCreatedEvent.parameters.push(
    new ethereum.EventParam("_link", ethereum.Value.fromString(_link))
  )
  projectCreatedEvent.parameters.push(
    new ethereum.EventParam("_title", ethereum.Value.fromString(_title))
  )
  projectCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "goalAmount",
      ethereum.Value.fromUnsignedBigInt(goalAmount)
    )
  )
  projectCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "deadline",
      ethereum.Value.fromUnsignedBigInt(deadline)
    )
  )

  return projectCreatedEvent
}

export function createProjectFundedEvent(
  projectId: BigInt,
  supporter: Address,
  amount: BigInt,
  isEth: boolean
): ProjectFunded {
  let projectFundedEvent = changetype<ProjectFunded>(newMockEvent())

  projectFundedEvent.parameters = new Array()

  projectFundedEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromUnsignedBigInt(projectId)
    )
  )
  projectFundedEvent.parameters.push(
    new ethereum.EventParam("supporter", ethereum.Value.fromAddress(supporter))
  )
  projectFundedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  projectFundedEvent.parameters.push(
    new ethereum.EventParam("isEth", ethereum.Value.fromBoolean(isEth))
  )

  return projectFundedEvent
}

export function createRefundIssuedEvent(
  projectId: BigInt,
  supporter: Address,
  amount: BigInt,
  isEth: boolean
): RefundIssued {
  let refundIssuedEvent = changetype<RefundIssued>(newMockEvent())

  refundIssuedEvent.parameters = new Array()

  refundIssuedEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromUnsignedBigInt(projectId)
    )
  )
  refundIssuedEvent.parameters.push(
    new ethereum.EventParam("supporter", ethereum.Value.fromAddress(supporter))
  )
  refundIssuedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  refundIssuedEvent.parameters.push(
    new ethereum.EventParam("isEth", ethereum.Value.fromBoolean(isEth))
  )

  return refundIssuedEvent
}
