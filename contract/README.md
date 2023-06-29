# Contract for RealEsmates

## compile

```
npx truffle compile --network development
npx truffle compile --network ganache
```

## migrate

```
// local network에 contract 배포
npx truffle migrate --network development

// 모든 파일을 재 compile, migrations에 있는 script들을 다 실행시킴
npx truffle migrate --compile-all --reset --network development

// ganache 노드에 배포
npx truffle migrate --compile-all --reset --network ganache
```

## console

```
npx truffle console
```

## test

```
npx truffle test --network ganache
```

## how to deploy?

### remix

1. run command below to allow connect to localhost

- install `@remix-project/remixd` globally before run

```
remixd -s . --remix-ide https://remix.ethereum.org/
```

2. connect localhost from remix ide

3. select `deploy and run transaction` tab & select environt

4. click deploy

### truffle.config

1. set your wallet mnemonic on truffle-config

2. run deploy command

```
// ex)

truffle deploy --network matic
```
