'use client'

import { useRef } from 'react'
import { useFormStatus } from 'react-dom'

import { saveGuestbookEntry } from '@/app/actions/guestbook'

export default function Form() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const { pending } = useFormStatus()

  return (
    <form
      action={async (formData) => {
        await saveGuestbookEntry(formData)
        formRef.current?.reset()
      }}
      className="relative max-w-[500px]"
      ref={formRef}
      style={{ opacity: !pending ? 1 : 0.7 }}
    >
      <input
        aria-label="Your message"
        className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
        disabled={pending}
        name="entry"
        placeholder="Your message..."
        required
        type="text"
      />
      <button
        className="flex items-center justify-center absolute right-1 top-1 px-2 py-1 font-medium h-8 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded w-16"
        disabled={pending}
        type="submit"
      >
        Sign
      </button>
    </form>
  )
}