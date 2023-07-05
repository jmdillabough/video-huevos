const getGames = async () => {
  const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API}`)
  if (!res) {
    throw new Error('Failed to fetch')
  }
  
}

export default function Home() {
  getGames()
  return (
    <main>
      <h2>Hello</h2>
    </main>
  )
}
