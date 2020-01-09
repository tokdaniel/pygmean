import { useRouter } from 'next/router'
import React from 'react'
import { NextPage } from '~/node_modules/next'
import { isBrowser } from '~/utils/is-browser'

const Error401: NextPage = () => {
  const router = useRouter()

  isBrowser && setTimeout(() => router.push('/'), 3000)

  return (
    <div>
      You have no permission to view this page
    </div>
  )
}

export default Error401
