import './app.css'
import PWSDK from 'pw-app-sdk'
const sdk = PWSDK.init()

async function main() {
  const context = await sdk.getContext()
  document.getElementById('root').innerHTML = JSON.stringify(context)
}

main()
