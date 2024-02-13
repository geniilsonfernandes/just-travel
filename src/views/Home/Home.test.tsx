import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import Home from '.'

vi.mock('@/components/Filter', () => ({
  default: () => <div data-testid='Filter'>Filter</div>,
}))
vi.mock('@/components/Pagination', () => ({
  default: () => <div data-testid='Pagination'>Pagination</div>,
}))
vi.mock('@/components/Search', () => ({
  default: () => <div data-testid='Search'>Search</div>,
}))

// vi.mock('react-redux', () => ({
//   useDispatch: vi.fn(),
//   useSelector: vi.fn(),
//   Provider: ({ children }: { children: React.ReactNode }) => children,
// }))

// type TicketsState = {
//   data: []
//   isLoading: boolean
//   isError: boolean
//   isEmpty: boolean
// }

// const rootReducer = combineReducers({
//   tickets: createSlice({
//     name: 'tickets',
//     initialState: {
//       data: [],
//     },
//     reducers: {},
//   }).reducer,
// })

// vi.mock('@/store', () => ({
//   useAppDispatch: vi.fn().mockReturnValue(vi.fn()),
//   useAppSelector: vi.fn((selector) =>
//     selector({
//       tickets: {
//         data: [],
//         isLoading: false,
//         isError: false,
//         isEmpty: false,
//       } as TicketsState,
//     })
//   ),
// }))

// const mockStore = configureStore({
//   reducer: rootReducer,
// })

describe('Home page with loading', () => {
  vi.mock('@/store', () => ({
    useAppDispatch: vi.fn().mockReturnValue(vi.fn()),
    useAppSelector: vi.fn((selector) =>
      selector({
        tickets: {
          data: [],
          isLoading: true,
          isError: false,
          isEmpty: false,
        },
      })
    ),
  }))

  it('should render Home page with loading', () => {
    render(<Home />)

    const loading = screen.getByLabelText('loading')

    expect(loading).toBeInTheDocument()
  })
})
