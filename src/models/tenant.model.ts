export {}
const { validate } = require('jsonschema')
const Model = require('./model')
const Utils = require('../lib/utils')

const utils = new Utils()

type CreateProps = Record<string, unknown>
type CreateResponse = boolean
type GetProps = {
   tenantId: string
}
type GetResponse = Record<string, unknown>

module.exports = class TenantModel extends Model {
   constructor() {
      super()
   }

   async create(props: CreateProps): Promise<CreateResponse> {
      const schema = await utils.loadSchema('tenant')
      const result = validate(props, schema)
      return result.valid
   }

   async createProvider(props: CreateProps): Promise<CreateResponse> {
      return await utils.validateSchema('tenant_provider', props)
   }

   async createJob(props: CreateProps): Promise<CreateResponse> {
      return await utils.validateSchema('tenant_job', props)
   }

   get(props: GetProps): GetResponse {
      const schema = {
         $id: 'http://yunibas.app/schema/logs.schema.json',
         $schema: 'http://json-schema.org/draft-07/schema#',
         type: 'object',
         properties: {
            tenant_id: { type: 'string' },
         },
         required: ['tenant_id'],
      }
      const result = validate(props, schema)
      return result.valid
   }
}
