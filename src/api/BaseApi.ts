import { test as baseTest  } from '@playwright/test';
import { CommonApi } from "./CommonApi.ts";

interface ApiObjects {
    valApis: CommonApi;
}
const test = baseTest.extend<ApiObjects>({
    valApis: async ({ request }, use) => {
        await use(new CommonApi(request));
    }
})

export default test;
export const expect = test.expect;