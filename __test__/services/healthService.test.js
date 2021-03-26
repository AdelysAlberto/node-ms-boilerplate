const service = require('./../../src/services/healthService');


describe('Health service', () => {
    beforeEach(()=>{
        jest.resetModules();
    })

    it(' get Health and memory usage', async ()=>{
        const used = process.memoryUsage().heapTotal / 1024 / 1024;
        const responseMock = {
            status: 'ok',
            memoryUsage: `${used}MB`,
          }
        
        const result = await service.getHealth();
        
        await expect(result).toStrictEqual(responseMock);
    })

})