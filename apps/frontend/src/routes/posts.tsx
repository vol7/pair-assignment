import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts')({
  component: PostsList,
})

function PostsList() {
  return (
    <div className="p-2">
      <h1>Posts</h1>
    </div>
  )
}
