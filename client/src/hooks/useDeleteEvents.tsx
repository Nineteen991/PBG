import { useMutation, useQueryClient } from '@tanstack/react-query'

import { axiosDelete } from './../utils/axiosReqs'

export function useDeleteEvents() {
  const queryClient = useQueryClient()

  return useMutation((id: string) => axiosDelete('events', id),
  {
    onSuccess: () => {
      queryClient.invalidateQueries(['events'])
    }
  })
}