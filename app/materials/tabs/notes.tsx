"use client"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import ComingSoon from "@/app/components/ui/comingSoon"
import { useRouter } from "next/navigation"

type Note = {
  id: string
  title: string
  pdf_url: string
  bucket: string
  subject: string
  stream: string
}

const supabase = createClient()

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    const fetchNotes = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        console.error("No active session")
        setLoading(false)
        return
      }

      const { data, error } = await supabase.from("notes").select("*")

      if (error) {
        console.error(error)
      } else {
        setNotes(data || [])
      }

      setLoading(false)
    }

    fetchNotes()
  }, [])

  if (loading) {
    return <main className="p-6 text-white">Loading notes...</main>
  }

  return (
    <main className="px-6 text-white">
      <h1 className="text-2xl text-black mb-6">Notes</h1>

      {notes.length === 0 ? (
        <p className="flex justify-center items-center">
            <ComingSoon />
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {notes.map((note) => (
            <div
              key={note.id}
              className="p-4 border col-span-1 border-neutral-200 rounded-lg bg-white shadow-md duration-300 hover:scale-105 transition"
            >
              <div className="relative w-full h-50 mb-3 rounded-md overflow-hidden">
                <img
                  src="/assets/notes.png"
                  alt="preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <span className="text-xl text-black font-medium line-clamp-2 text-center">
                    {note.title}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 py-4">
                <span className="text-black">
                {note.stream}
              </span>
              <span>
                <div className="bg-black animate-pulse h-2 w-2 rounded-full"></div>
              </span>
              <span className="text-black">
                {note.subject}
              </span>
              </div>

              <button
                onClick={() => {
                  // extract file path from signed URL
                  const path = note.pdf_url
                    .split("/object/sign/notes/")[1]
                    ?.split("?")[0]

                  router.push(`/viewer?file=${encodeURIComponent(path || "")}`)
                }}
                className="inline-block py-2 px-6 rounded-full text-sm bg-blue-500 font-medium hover:scale-110 duration-300"
              >
                View PDF
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}