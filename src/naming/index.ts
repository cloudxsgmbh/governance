/* © 2023 cloudxs GmbH. All rights reserved. / Naming.ts */

// When creating new entries, please consider:
// https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations

export enum Abbreviations {
  AzureContainerRegistry = 'cr',
  AzureFirewallRuleCollection = 'afwrc',
  AzureFirewallRuleCollectionGroup = 'afwrcg',
  ContainerImage = 'cimg',
  ContainerInstance = 'ci',
  FirewallRule = 'fwr',
  FrontDoorCustomDomain = 'fdcd',
  FrontDoorEndpoint = 'fde',
  FrontDoorFirewallPolicy = 'fdfp',
  FrontDoorOrigin = 'fdo',
  FrontDoorOriginGroup = 'fdog',
  FrontDoorProfile = 'afd',
  FrontDoorRoute = 'fdr',
  FrontDoorRule = 'fdrl',
  FrontDoorRuleSet = 'fdrs',
  FrontDoorSecurityPolicy = 'fdsp',
  IpGroup = 'ipg',
  K8sConfigMap = 'k8cm',
  K8sCronJob = 'k8cj',
  K8sDeployment = 'k8dep',
  K8sHorizontalPodAutoscaler = 'k8hpa',
  K8sNamespace = 'k8ns',
  K8sPersistantVolumeClaim = 'k8pvc',
  K8sSecret = 'k8sec',
  K8sService = 'k8svc',
  K8sStorageClass = 'k8sc',
  LogAnalyticsWorkspace = 'log',
  ManagedCluster = 'aks',
  MySQLDatabase = 'mysqldb',
  MySQLServer = 'mysql',
  NetworkInterface = 'nic',
  NetworkSecurityGroup = 'nsg',
  PrivateDnsZone = 'pdz',
  PrivateDnsZoneGroup = 'pdzg',
  PrivateEndpoint = 'pep',
  PrivateLinkScope = 'plsc',
  PrivateLinkService = 'pl',
  Provider = 'prv',
  RecoveryServicesProtectedItem = 'rspi',
  RecoveryServicesProtectionContainer = 'rspc',
  RecoveryServicesProtectionPolicy = 'rspp',
  RecoveryServicesVault = 'rsv',
  ResourceGroup = 'rg',
  RoleAssignment = 'ra',
  RouteTable = 'rt',
  StorageAccount = 'st',
  Subnet = 'snet',
  UserAssignedIdentity = 'id',
  UserDefinedRoute = 'udr',
  VirtualMachine = 'vm',
  VirtualMachineExtension = 'vme',
  VirtualNetwork = 'vnet',
  VirtualNetworkLink = 'vnetli',
  VirtualNetworkPeering = 'peer',
  WAFPolicy = 'waf',
}

/**
 * Create a name regarding the naming convention.
 * @param type The resource type.
 * @param name Name of the app or service.
 * @param index an optional numerical index to append to the name.
 * @param separator Set to false to remove the hyphen separator from the name.
 * @returns A name regarding the naming convention.
 */
export function getName(type: Abbreviations, name: string, index?: number, separator: boolean = true) {
  let returnValue = `${type}-${name}${index ? '-' + index.toString().padStart(3, '0') : ''}`;

  if (separator === false) {
    returnValue = returnValue.replace(/-/g, '');
  }

  // Trim the name of Storage Accounts to 24 characters
  if (type === Abbreviations.StorageAccount && returnValue.length > 24) {
    returnValue = returnValue.substring(0, 24);
  }
  return returnValue;
}
