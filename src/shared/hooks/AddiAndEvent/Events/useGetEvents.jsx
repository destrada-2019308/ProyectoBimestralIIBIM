import { useState } from "react"
import toast from "react-hot-toast"
import { getEventsRequest } from "../../../../services/apiAdmin"

export const useGetEvents = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        setIsLoading(true)
        try {
            const response = await getEventsRequest()
            console.log(response)
            setIsLoading(false)
            if (response.error) {
                toast.error(
                    response?.err?.response?.data?.msg ||
                    response?.err?.data?.msg ||
                    "Error getting events. Try again."
                )
            } else {
                setEvents(response.events)
            }
        } catch (error) {
            console.error(error)
            setIsLoading(false)
            toast.error("Error getting events. Try again.")
        }
    }

    return {
        getEvents,
        isLoading,
        events,
    }
}