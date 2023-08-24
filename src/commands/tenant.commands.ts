export {}
const Commands = require('./commands')
const TenantService = require('../services/tenant.service')

type CreateTenantProps = Record<string, unknown>
type CreateTenantResponse = Record<string, unknown>
type CreateTenantProviderProps = Record<string, unknown>
type CreateTenantProviderResponse = Record<string, unknown>
type CreateTenantJobProps = Record<string, unknown>
type CreateTenantJobResponse = Record<string, unknown>
type GetTenantProps = Record<string, unknown>
type GetTenantResponse = Record<string, unknown>
type GetTenantProvidersResponse = Record<string, unknown>[]
type GetTenantJobsResponse = Record<string, unknown>[]

const service = new TenantService()

module.exports = class TenantCommands extends Commands {
   constructor() {
      super()
   }

   getTenant = async (props: GetTenantProps): Promise<GetTenantResponse> => {
      const result = await service.getTenant(props)
      console.log('tenant_commands', 'getTenant', result)
      return result
   }

   getTenantProviders = async (
      props: GetTenantProps
   ): Promise<GetTenantProvidersResponse> => {
      const result = await service.getTenantProviders(props)
      console.log('tenant_commands', 'getTenantProviders', result)
      return result
   }

   getTenantJobs = async (
      props: GetTenantProps
   ): Promise<GetTenantJobsResponse> => {
      const result = await service.getTenantJobs(props)
      console.log('tenant_commands', 'getTenantJobs', result)
      return result
   }

   createTenant = async (
      props: CreateTenantProps
   ): Promise<CreateTenantResponse> => {
      const result = await service.createTenant(props)
      console.log('tenant_commands', 'createTenant', result)
      return result
   }

   createTenantProvider = async (
      props: CreateTenantProviderProps
   ): Promise<CreateTenantProviderResponse> => {
      const result = await service.createTenantProvider(props)
      console.log('tenant_commands', 'createTenantProvider', result)
      return result
   }

   createTenantJob = async (
      props: CreateTenantJobProps
   ): Promise<CreateTenantJobResponse> => {
      const result = await service.createTenantJob(props)
      console.log('tenant_commands', 'createTenantJob', result)
      return result
   }
}
