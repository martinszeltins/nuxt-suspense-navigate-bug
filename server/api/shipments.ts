export default defineEventHandler(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))

    return ['shipment1', 'shipment2', 'shipment3']
})
