import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { FundsDistributed } from "../generated/schema"
import { FundsDistributed as FundsDistributedEvent } from "../generated/FrogFund/FrogFund"
import { handleFundsDistributed } from "../src/frog-fund"
import { createFundsDistributedEvent } from "./frog-fund-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let projectId = BigInt.fromI32(234)
    let amount = BigInt.fromI32(234)
    let isEth = "boolean Not implemented"
    let newFundsDistributedEvent = createFundsDistributedEvent(
      projectId,
      amount,
      isEth
    )
    handleFundsDistributed(newFundsDistributedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("FundsDistributed created and stored", () => {
    assert.entityCount("FundsDistributed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FundsDistributed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "projectId",
      "234"
    )
    assert.fieldEquals(
      "FundsDistributed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "FundsDistributed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isEth",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
