import { useMutation, useQueryClient } from '@tanstack/react-query'

import { axiosPost } from '../utils/axiosReqs'
import { AddEventState } from '../utils/interfaces/events.interfaces'

interface events {
  site: string 
  data: AddEventState
}

export function usePostEvents() {
  const queryClient = useQueryClient()

  return useMutation((data: events) => axiosPost(data.site, data.data),
  {
    onSuccess: () => {
      queryClient.invalidateQueries(['events'])
      console.log('useMutation success')
    }
  })
}