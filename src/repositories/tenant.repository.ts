export {}
const Repository = require('./repository')
const { FirestoreAdapter } = require('@yunibas/adapters')

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

module.exports = class TenantRepository extends Repository {
   constructor() {
      super()
      this.adapter = new FirestoreAdapter()
   }

   async getTenant(props: GetTenantProps): Promise<GetTenantResponse> {
      const id = props.tenant_id
      const tenant = await this.adapter.getDoc({
         collection: 'tenants',
         id,
      })
      return tenant
   }

   async getTenantProviders(
      props: GetTenantProps
   ): Promise<GetTenantProvidersResponse> {
      console.log('props', JSON.stringify(props))
      const providers = await this.adapter.getDocs({
         collection: 'tenants',
         id: props.tenant_id,
         subcollection: 'providers',
      })
      return providers
   }

   async getTenantJobs(props: GetTenantProps): Promise<GetTenantJobsResponse> {
      const id = props.tenant_id
      const jobs = await this.adapter.getDocs({
         collection: 'tenants',
         id,
         subcollection: 'jobs',
      })
      return jobs
   }

   async createTenant(props: CreateTenantProps): Promise<CreateTenantResponse> {
      const result = await this.adapter.addDoc({
         collection: 'tenants',
         data: props,
      })
      return result
   }

   async createTenantProvider(
      props: CreateTenantProviderProps
   ): Promise<CreateTenantProviderResponse> {
      const id = props.tenant_id
      delete props.tenant_id
      const result = await this.adapter.addDoc({
         collection: 'tenants',
         id,
         subcollection: 'providers',
         data: props,
      })
      return result
   }

   async createTenantJob(
      props: CreateTenantJobProps
   ): Promise<CreateTenantJobResponse> {
      const id = props.tenant_id
      delete props.tenant_id
      const result = await this.adapter.addDoc({
         collection: 'tenants',
         id,
         subcollection: 'jobs',
         data: props,
      })
      return result
   }
}
