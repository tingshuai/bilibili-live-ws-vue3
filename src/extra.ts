export const getConf = async (roomid: number) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const got = require('got')
  const { data: { token: key, host_list: [{ host }] } } = await got(`https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo?id=${roomid}`).json()
  const address = `wss://${host}/sub`
  return { key, host, address } as { key: string, host: string, address: string }
}
