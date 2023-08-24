export {}
const Service = require('./service')
const TenantRepository = require('../repositories/tenant.repository')
const Utils = require('../lib/utils')

const utils = new Utils()

type CreateTenantProps = Record<string, unknown>
type CreateTenantResponse = Record<string, unknown> | Error
type CreateTenantProviderProps = Record<string, unknown>
type CreateTenantProviderResponse = Record<string, unknown> | Error
type CreateTenantJobProps = Record<string, unknown>
type CreateTenantJobResponse = Record<string, unknown> | Error
type GetTenantProps = Record<string, unknown>
type GetTenantResponse = Record<string, unknown> | Error
type GetTenantProvidersResponse = Record<string, unknown>[] | Error
type GetTenantJobsResponse = Record<string, unknown>[] | Error

module.exports = class TenantService extends Service {
   constructor() {
      super()
      this.repo = new TenantRepository()
   }

   async getTenant(props: GetTenantProps): Promise<GetTenantResponse> {
      const result = await this.repo.getTenant(props)

      utils.publishMessage({
         severity: 'INFO',
         tenant_ref: '',
         action: 'get_tenant',
         target_ref: props.tenant_id,
         request: props,
         response: result,
         success: !!result,
      })

      return result
   }

   async getTenantProviders(
      props: GetTenantProps
   ): Promise<GetTenantProvidersResponse> {
      const result = await this.repo.getTenantProviders(props)

      utils.publishMessage({
         severity: 'INFO',
         tenant_ref: '',
         action: 'get_tenant_providers',
         target_ref: props.tenant_id,
         request: props,
         response: result,
         success: !!result,
      })

      return result
   }

   async getTenantJobs(props: GetTenantProps): Promise<GetTenantJobsResponse> {
      const result = await this.repo.getTenantJobs(props)

      utils.publishMessage({
         severity: 'INFO',
         tenant_ref: '',
         action: 'get_tenant_jobs',
         target_ref: props.tenant_id,
         request: props,
         response: result,
         success: !!result,
      })

      return result
   }

   async createTenant(props: CreateTenantProps): Promise<CreateTenantResponse> {
      const result = await this.repo.createTenant(props)

      utils.publishMessage({
         severity: 'INFO',
         tenant_ref: '',
         action: 'create_tenant',
         target_ref: props.tenant_id,
         request: props,
         response: result,
         success: !!result,
      })

      return result
   }

   async createTenantProvider(
      props: CreateTenantProviderProps
   ): Promise<CreateTenantProviderResponse> {
      const result = await this.repo.createTenantProvider(props)

      utils.publishMessage({
         severity: 'INFO',
         tenant_ref: '',
         action: 'create_tenant_provider',
         target_ref: props.tenant_id,
         request: props,
         response: result,
         success: !!result,
      })

      return result
   }

   async createTenantJob(
      props: CreateTenantJobProps
   ): Promise<CreateTenantJobResponse> {
      const result = await this.repo.createTenantJob(props)

      utils.publishMessage({
         severity: 'INFO',
         tenant_ref: '',
         action: 'create_tenant_job',
         target_ref: props.tenant_id,
         request: props,
         response: result,
         success: !!result,
      })

      return result
   }
}
