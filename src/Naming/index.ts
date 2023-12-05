/* © 2023 cloudxs GmbH. All rights reserved. / Naming.ts */

export enum Naming {
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
  FrontDoorRule = 'fdrl',
  FrontDoorRuleSet = 'fdrs',
  FrontDoorRoute = 'fdr',
  FrontDoorSecurityPolicy = 'fdsp',
  IpGroup = 'ipg',
  K8sDeployment = 'k8dep',
  K8sNamespace = 'k8ns',
  K8sPersistantVolumeClaim = 'k8pvc',
  K8sService = 'k8svc',
  K8sStorageClass = 'k8sc',
  ManagedCluster = 'aks',
  MySQLDatabase = 'mysqldb',
  MySQLServer = 'mysql',
  NetworkInterface = 'nic',
  NetworkSecurityGroup = 'nsg',
  PrivateEndpoint = 'pep',
  PrivateDnsZone = 'pdz',
  PrivateDnsZoneGroup = 'pdzg',
  PrivateLinkService = 'pl',
  Provider = 'prv',
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
export function getName(type: Naming, name: string, index?: number, separator: boolean = true) {
  let returnValue = `${type}-${name}${index ? '-' + index.toString().padStart(3, '0') : ''}`;

  if (separator === false) {
    returnValue = returnValue.replace(/-/g, '');
  }

  // Trim the name of Storage Accounts to 24 characters
  if (type === Naming.StorageAccount && returnValue.length > 24) {
    returnValue = returnValue.substring(0, 24);
  }
  return returnValue;
}
