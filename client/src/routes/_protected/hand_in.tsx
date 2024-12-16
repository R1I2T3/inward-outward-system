import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/hand_in')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/hand_in"!</div>
}