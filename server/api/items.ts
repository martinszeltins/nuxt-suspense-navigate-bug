export default defineEventHandler(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))

    return ['item1', 'item2', 'item3']
})
