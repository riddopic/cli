import { PluginType } from '@cloudgraph/sdk'

import OperationBaseCommand from '../operation'

export default class ListPolicy extends OperationBaseCommand {
  static description = 'List currently installed policy packs and versions'

  static examples = ['$ cg policy list', '$ cg policy list aws']

  static strict = false

  static hidden = false

  async run(): Promise<void> {
    await this.list(PluginType.PolicyPack)
  }
}
