/* © 2024 cloudxs GmbH. All rights reserved. / index.ts */

// built-ins
import * as pulumi from '@pulumi/pulumi';

/**
 * Create a resource Tag object for a Pulumi resource.
 *
 * If the Pulumi Project has a `projectTags` object in the stacks config, it will be merged with the default tags.
 *
 * @param region The region to add to the tags
 * @returns A Tag object.
 */
export function getPulumiTags(region?: string) {
  const config = new pulumi.Config();
  const configTags = config.getObject('projectTags');

  const tags = {
    Environment: pulumi.getStack(),
    Project: pulumi.getProject(),
    'Created by': 'Pulumi',
  };

  if (configTags) {
    Object.assign(tags, configTags);
  }

  if (region) {
    Object.assign(tags, { Location: region });
  }

  return tags;
}
