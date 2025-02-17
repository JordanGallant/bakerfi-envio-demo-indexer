import assert from "assert";
import { 
  TestHelpers,
  BakerFiVault_AdminChanged
} from "generated";
const { MockDb, BakerFiVault } = TestHelpers;

describe("BakerFiVault contract AdminChanged event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for BakerFiVault contract AdminChanged event
  const event = BakerFiVault.AdminChanged.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("BakerFiVault_AdminChanged is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await BakerFiVault.AdminChanged.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualBakerFiVaultAdminChanged = mockDbUpdated.entities.BakerFiVault_AdminChanged.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedBakerFiVaultAdminChanged: BakerFiVault_AdminChanged = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      previousAdmin: event.params.previousAdmin,
      newAdmin: event.params.newAdmin,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualBakerFiVaultAdminChanged, expectedBakerFiVaultAdminChanged, "Actual BakerFiVaultAdminChanged should be the same as the expectedBakerFiVaultAdminChanged");
  });
});
