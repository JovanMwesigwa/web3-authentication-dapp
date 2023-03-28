import Card from './components/Card'

const Store = () => {
  return (
    <div className="flex flex-col flex-1 px-16">
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="my-8 text-3xl font-bold">Inventory</h1>

        <h4>0xg3..65a</h4>
      </div>

      <div className="flex flex-row flex-wrap flex-1 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Store
