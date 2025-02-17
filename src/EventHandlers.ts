/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  BakerFiVault,
  BakerFiVault_AdminChanged,
  BakerFiVault_BeaconUpgraded,
  BakerFiVault_Upgraded,
} from "generated";

BakerFiVault.AdminChanged.handler(async ({ event, context }) => {
  const entity: BakerFiVault_AdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
  };

  context.BakerFiVault_AdminChanged.set(entity);
});

BakerFiVault.BeaconUpgraded.handler(async ({ event, context }) => {
  const entity: BakerFiVault_BeaconUpgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    beacon: event.params.beacon,
  };

  context.BakerFiVault_BeaconUpgraded.set(entity);
});

BakerFiVault.Upgraded.handler(async ({ event, context }) => {
  const entity: BakerFiVault_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.BakerFiVault_Upgraded.set(entity);
});
