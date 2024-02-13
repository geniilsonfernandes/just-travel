import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { cartMock } from '@/components/Cart/mock'
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

afterEach(cleanup)

const fetchTickets = vi.fn()
vi.mock('@/store/reducers/tickets/ticketsSlice', () => ({
  fetchTickets: () => {
    fetchTickets()
  },
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

const state = {
  isLoading: true,
  isError: false,
  isEmpty: false,
}

describe('Home page with loading', () => {
  vi.mock('@/store', () => ({
    useAppDispatch: vi.fn().mockReturnValue(vi.fn()),
    useAppSelector: vi.fn((selector) =>
      selector({
        tickets: {
          data: [],
          ...state,
        },
      })
    ),
  }))

  it('should render Home page with loading', () => {
    state.isLoading = true
    render(<Home />)

    const loading = screen.getByLabelText('loading')

    expect(fetchTickets).toBeCalledTimes(1)
    expect(loading).toBeInTheDocument()
  })

  it('should render Home page with error', () => {
    state.isLoading = false
    state.isError = true

    render(<Home />)

    const error = screen.getByLabelText('error')

    expect(error).toBeInTheDocument()
  })

  it('should render Home page with empty', () => {
    state.isLoading = false
    state.isError = false
    state.isEmpty = true

    render(<Home />)

    const empty = screen.getByLabelText('empty')

    expect(empty).toBeInTheDocument()
  })
})

describe('Home page with data', () => {
  vi.mock('@/store', () => ({
    useAppDispatch: vi.fn().mockReturnValue(vi.fn()),
    useAppSelector: vi.fn((selector) =>
      selector({
        tickets: {
          data: cartMock,
          ...state,
        },
      })
    ),
  }))

  it('should render Home page with data', () => {
    state.isLoading = false
    state.isError = false
    state.isEmpty = false

    render(<Home />)

    const data = screen.getAllByLabelText('ticket')

    expect(data).toHaveLength(cartMock.length)
  })
})
