import { AppType } from '@repo/backend/app'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { hc } from 'hono/client'

export const Route = createFileRoute('/movies/')({
  component: MoviesHome,
})

const client = hc<AppType>('http://localhost:3000/')

function MoviesHome() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const response = await client.movies.$get({})
      const data = await response.json()
      return data
    },
  })

  return (
    <div>
      <h1>Hello "/movies"!</h1>
      <div>
        <span>isLoading: {isLoading ? 'true' : 'false'}</span>
        <span>isFetching: {isFetching ? 'true' : 'false'}</span>
      </div>
      {data?.length ? (
        <div>
          <ul>
            {data.map((item) => {
              return (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>Released: {item.yearReleased}</p>
                </li>
              )
            })}
          </ul>
        </div>
      ) : (
        <div>No data (yet?)</div>
      )}
    </div>
  )
}
