import { Navigation } from './navigation'
import { Toggle } from './toggle'
import { Wrapper } from './wrapper'

export function Sidebar() {
	return (
		<Wrapper>
			<Toggle />
			<Navigation />
		</Wrapper>
	)
}
