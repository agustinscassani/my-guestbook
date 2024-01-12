import { saveGuestbookEntry } from '@/app/actions/guestbook'
import { SubmitButton } from '@/app/ui/buttons'

export default function Form() {
  return (
    <form
      action={async (formData) => await saveGuestbookEntry(formData)}
      className='relative max-w-[500px]'
    >
      <input
        aria-label='Your message'
        className='pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100'
        name='entry'
        placeholder='Your message...'
        required
        type='text'
      />
      <SubmitButton />
    </form>
  )
}