import { Outlet } from 'react-router-dom'

// layout for common elements
export default function Layout() {
  return (
    <main className="w-screen h-screen">
      <Outlet />
    </main>
  )
}
