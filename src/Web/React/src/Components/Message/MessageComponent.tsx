import * as React from 'react'

import { Columnns, Mode, Platform, Size, State, Style, Type, Position } from 'Controls'

import { MessageViewModel } from 'Components/Message'
import { Container } from 'Controls/Container'
import { Block } from 'Controls/Block'
import { Title } from 'Controls/Title'
import { Subtitle } from 'Controls/Subtitle'
import { Content } from 'Controls/Content/Content'
import { Button } from 'Controls/Button'
import { Box } from 'Controls/Box'
import { Text } from 'Controls/Text'
import { Notification } from 'Controls/Notification'
import { Delete } from 'Controls/Delete'
import { Tag } from 'Controls/Tag'
import { Message } from 'Controls/Message'
import { MessageHeader } from 'Controls/Message'
import { MessageBody } from 'Controls/Message'
import { Menu, MenuLabel, MenuList, MenuListItem } from 'Controls/Menu'
import { Link } from 'Controls/Link'
import { Hero, HeroBody } from 'Controls/Hero'
import { Card, CardContent, CardFooter, CardFooterItem } from 'Controls/Card'
import { Level, LevelLeft, LevelItem, LevelRight } from 'Controls/Level'
import { Field } from 'Controls/Field'
import { Control } from 'Controls/Control'
import { Textbox, InputType } from 'Controls/Textbox'
import { Form } from 'Controls/Form'
import { Label } from 'Controls/Label'
import { Select } from 'Controls/Select'
import { Textarea } from 'Controls/Textarea'
import { Columns, Column } from 'Controls/Column'
import { Tiles, Tile, TileType } from 'Controls/Tile'
import { Breadcrumbs, Breadcrumb, Separator } from 'Controls/Breadcrumbs'
import { Dropdown } from 'Controls/Dropdown/Dropdown'
import { DropdownDivider } from 'Controls/Dropdown/DropdownDivider'
import { DropdownItem } from 'Controls/Dropdown/DropdownItem'
import { DropdownContent } from 'Controls/Dropdown/DropdownContent'
import { DropdownMenu } from 'Controls/Dropdown/DropdownMenu'
import { DropdownTrigger } from 'Controls/Dropdown/DropdownTrigger'
import { Modal, ModalCard, ModalCardBody, ModalCardFooter, ModalCardHeader, ModalCardTitle } from 'Controls/Modal/Modal'
import { Checkbox } from 'Controls/Checkbox/Checkbox'
import { Radio } from 'Controls/Radio/Radio'
import {
	Navbar,
	NavbarBrand,
	NavbarBurger, 
	NavbarDivider, 
	NavbarDropdown, 
	NavbarEnd,
	NavbarItem,
	NavbarLink,
	NavbarMenu,
	NavbarStart
} from 'Controls/Navbar/Navbar'
import {
	Pagination, PaginationLink,
	PaginationList,
	PaginationListItem,
	PaginationNext,
	PaginationPrevious, PaginationRange
} from 'Controls/Pagination/Pagination'
import { Switch } from 'Controls/Switch/Switch'
import { Badge, BadgePosition, BadgeType, SpanBadge } from 'Controls/Badge/Badge'
import { Tooltip, TooltipPosition, TooltipType } from 'Controls/Tooltip/Tooltip'
import { Pageloader } from 'Controls/Pageloader'

export interface MessageComponentState {
	messages: MessageViewModel[];
	state: State
	switch: boolean
	pageloader?: State
}

export class MessageComponent extends React.Component<{}, MessageComponentState> {

	constructor(props: {}) {
		super(props)
		this.state = { messages: null, state: null, switch: false, pageloader: State.Active }
	}

	public componentDidMount() {
		setInterval(() => {this.setState({...this.state, pageloader: null})}, 2000)
	}

	public render() {

		return (
			<Container platform={Platform.Mobile}>
				<Block>
					<Title text={'headings'}
						columns={Columnns.One}/>
					<Subtitle text={'subtitle'}/>
				</Block>

				<Block>
					<Title text={'Content'}/>
					<Content size={Size.Small}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quae!
					</Content>
					<Content size={Size.Medium}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quae!
					</Content>
					<Content size={Size.Large}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quae!
					</Content>
				</Block>

				<Block>
					<Title text={'Buttons'} columns={Columnns.One}/>
					<Button text={'Button'}/>
					<Button text={'Button'} type={Type.White}/>
					<Button text={'Button'} type={Type.Light}/>
					<Button text={'Button'} type={Type.Dark}/>
					<Button text={'Button'} type={Type.Black}/>
					<Button text={'Button'} type={Type.Link}/>
				</Block>

				<Block>
					<Button text={'Button'} type={Type.Primary}/>
					<Button text={'Button'} type={Type.Info}/>
					<Button text={'Button'} type={Type.Success}/>
					<Button text={'Button'} type={Type.Warning}/>
					<Button text={'Button'} type={Type.Danger}/>
				</Block>

				<Block>
					<Button text={'Button'} type={Type.Primary} size={Size.Small}/>
					<Button text={'Button'} type={Type.Primary} size={Size.Normal}/>
					<Button text={'Button'} type={Type.Info} size={Size.Medium}/>
					<Button text={'Button'} type={Type.Success} size={Size.Large}/>
				</Block>

				<Block>
					<Button text={'Button'} type={Type.Primary} style={Style.Outlined}/>
					<Button text={'Button'} type={Type.Info} style={Style.Outlined}/>
					<Button text={'Button'} type={Type.Success} style={Style.Outlined}/>
					<Button text={'Button'} type={Type.Warning} style={Style.Outlined}/>
					<Button text={'Button'} type={Type.Danger} style={Style.Outlined}/>
				</Block>

				<Block>
					<Button text={'Button'} type={Type.Primary} style={Style.Inverted}/>
					<Button text={'Button'} type={Type.Info} style={Style.Inverted}/>
					<Button text={'Button'} type={Type.Success} style={Style.Inverted}/>
					<Button text={'Button'} type={Type.Warning} style={Style.Inverted}/>
					<Button text={'Button'} type={Type.Danger} style={Style.Inverted}/>
				</Block>

				<Block>
					<Button text={'Button'} state={State.Hovered}/>
					<Button text={'Button'} state={State.Focused}/>
					<Button text={'Button'} state={State.Active}/>
					<Button text={'Button'} state={State.Loading}/>
					<Button text={'Button'} state={State.Disabled}/>
				</Block>

				<Block>
					<Title text={'Box'} columns={Columnns.One}/>
					<Box>
						<Title text={'Hello World I\'m Box'}/>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, quibusdam.
						</Text>
					</Box>
				</Block>

				<Block>
					<Title text={'Notifications'} columns={Columnns.One}/>
					<Notification>
						<Delete/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea error itaque minus.
					</Notification>
					<Notification type={Type.Primary}>
						<Delete/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea error itaque minus.
					</Notification>
					<Notification type={Type.Info}>
						<Delete/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea error itaque minus.
					</Notification>
					<Notification type={Type.Success}>
						<Delete/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea error itaque minus.
					</Notification>
					<Notification type={Type.Warning}>
						<Delete/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea error itaque minus.
					</Notification>
					<Notification type={Type.Danger}>
						<Delete/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea error itaque minus.
					</Notification>
				</Block>

				<Block>
					<Title text={'Tags'} columns={Columnns.One}/>
					<Tag text={'Hello'}/>
					<Tag text={'Hello'} type={Type.Black}/>
					<Tag text={'Hello'} type={Type.Dark}/>
					<Tag text={'Hello'} type={Type.Light}/>
					<Tag text={'Hello'} type={Type.White}/>
					<Tag text={'Hello'} type={Type.Primary}/>
					<Tag text={'Hello'} type={Type.Info}/>
					<Tag text={'Hello'} type={Type.Success}/>
					<Tag text={'Hello'} type={Type.Warning}/>
					<Tag text={'Hello'} type={Type.Danger}>
						<Delete/>
					</Tag>
				</Block>

				<Block>
					<Title text={'Messages'} columns={Columnns.One}/>
					<Message type={Type.Primary}>
						<MessageHeader>
							<Text>About us</Text>
						</MessageHeader>
						<MessageBody>
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Adipisci aperiam asperiores assumenda corporis delectus doloremque
								ea est explicabo ipsa iure libero nostrum omnis optio placeat,
								porro quaerat quia similique totam.
							</Text>
						</MessageBody>
					</Message>
					<Message type={Type.Success}>
						<MessageHeader>
							<Text>About us</Text>
						</MessageHeader>
						<MessageBody>
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Adipisci aperiam asperiores assumenda corporis delectus doloremque
								ea est explicabo ipsa iure libero nostrum omnis optio placeat,
								porro quaerat quia similique totam.
							</Text>
						</MessageBody>
					</Message>
					<Message type={Type.Info}>
						<MessageHeader>
							<Text>About us</Text>
						</MessageHeader>
						<MessageBody>
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Adipisci aperiam asperiores assumenda corporis delectus doloremque
								ea est explicabo ipsa iure libero nostrum omnis optio placeat,
								porro quaerat quia similique totam.
							</Text>
						</MessageBody>
					</Message>
					<Message type={Type.Warning}>
						<MessageHeader>
							<Text>About us</Text>
						</MessageHeader>
						<MessageBody>
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Adipisci aperiam asperiores assumenda corporis delectus doloremque
								ea est explicabo ipsa iure libero nostrum omnis optio placeat,
								porro quaerat quia similique totam.
							</Text>
						</MessageBody>
					</Message>
					<Message type={Type.Danger}>
						<MessageHeader>
							<Text text={'About us'}/>
						</MessageHeader>
						<MessageBody>
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Adipisci aperiam asperiores assumenda corporis delectus doloremque
								ea est explicabo ipsa iure libero nostrum omnis optio placeat,
								porro quaerat quia similique totam.
							</Text>
						</MessageBody>
					</Message>
				</Block>

				<Block>
					<Menu>
						<MenuLabel text={'Label 1'}/>
						<MenuList>
							<MenuListItem>
								<Link text={'Text 1'}/>
								<Link text={'Text 2'}/>
							</MenuListItem>
						</MenuList>
						<MenuLabel text={'Label 2'}/>
						<MenuList>
							<MenuListItem>
								<Link text={'Text 23'} state={State.Active}/>
								<MenuList>
									<MenuListItem>
										<Link text={'Text 1'}/>
										<Link text={'Text 2'}/>
										<Link text={'Text 3'}/>
									</MenuListItem>
								</MenuList>
							</MenuListItem>
						</MenuList>
					</Menu>
				</Block>

				<Block>
					<Title text={'Hero Banner'}/>
					<Hero>
						<HeroBody>
							<Container>
								<Title text={'Hero Title'}/>
								<Subtitle text={'Hero subtitle'}/>
							</Container>
						</HeroBody>
					</Hero>
					<Hero type={Type.Primary}>
						<HeroBody>
							<Container>
								<Title text={'Hero Title'}/>
								<Subtitle text={'Hero subtitle'}/>
							</Container>
						</HeroBody>
					</Hero>
					<Hero type={Type.Success}>
						<HeroBody>
							<Container>
								<Title text={'Hero Title'}/>
								<Subtitle text={'Hero subtitle'}/>
							</Container>
						</HeroBody>
					</Hero>
					<Hero type={Type.Warning}>
						<HeroBody>
							<Container>
								<Title text={'Hero Title'}/>
								<Subtitle text={'Hero subtitle'}/>
							</Container>
						</HeroBody>
					</Hero>
					<Hero type={Type.Danger}>
						<HeroBody>
							<Container>
								<Title text={'Hero Title'}/>
								<Subtitle text={'Hero subtitle'}/>
							</Container>
						</HeroBody>
					</Hero>
					<Hero type={Type.Info}>
						<HeroBody>
							<Container>
								<Title text={'Hero Title'}/>
								<Subtitle text={'Hero subtitle'}/>
							</Container>
						</HeroBody>
					</Hero>
				</Block>

				<Block>
					<Title text={'Card'}/>
					<Card>
						<CardContent>
							<Title
								text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur obcaecati possimus quae quibusdam!'}/>
						</CardContent>
						<CardFooter>
							<CardFooterItem>
								<Text text={'Item1'}/>
							</CardFooterItem>
							<CardFooterItem>
								<Text text={'Item2'}/>
							</CardFooterItem>
						</CardFooter>
					</Card>
				</Block>
				<Block>
					<Title text={'Level'}/>
					<Level>
						<LevelLeft>
							<LevelItem>
								<Link text={'All'}/>
							</LevelItem>
							<LevelItem>
								<Link text={'Published'}/>
							</LevelItem>
							<LevelItem>
								<Link text={'Draft'}/>
							</LevelItem>
							<LevelItem>
								<Link text={'Deleted'}/>
							</LevelItem>
							<LevelItem>
								<Button text={'New'} type={Type.Primary}/>
							</LevelItem>
						</LevelLeft>
						<LevelRight>
							<LevelItem>
								<Field>
									<Control>
										<Textbox placeholder={'Search posts...'}/>
									</Control>
								</Field>
							</LevelItem>
						</LevelRight>
					</Level>
				</Block>

				<Block>
					<Title text={'Forms'}/>
					<Form>
						<Field>
							<Label text={'Name'}/>
							<Textbox placeholder={'Enter name'}/>
						</Field>
						<Field>
							<Label text={'Email'}/>
							<Textbox inputType={InputType.Email}
								type={Type.Success}
								placeholder={'Enter email'}/>
						</Field>
						<Field>
							<Label text={'Number'}/>
							<Textbox inputType={InputType.Number}
								type={Type.Danger}
								placeholder={'Enter number'}/>
						</Field>
						<Field>
							<Label text={'Package'}/>
							<Control>
								<Select>
									<option>Select Dropdown</option>
									<option>Simple</option>
									<option>Standard</option>
									<option>Super</option>
								</Select>
							</Control>
						</Field>
						<Field>
							<Label text={'Message'}/>
							<Control>
								<Textarea placeholder={'Message'}/>
							</Control>
						</Field>
					</Form>
				</Block>
				<Block>
					<Columns>
						<Column columns={Columnns.Six}>
							<Notification text={'Text 1'} type={Type.Danger}/>
						</Column>
						<Column>
							<Notification text={'Text 2'} type={Type.Warning}/>
						</Column>
						<Column>
							<Notification text={'Text 3'} type={Type.Success}/>
						</Column>
					</Columns>
				</Block>
				<Block>
					<Button text={'Hello'} type={Type.Primary}/>
				</Block>

				<Block>
					<Tiles>
						<Tile mode={Mode.Vertical} tileType={TileType.Parent} columns={Columnns.Four}>
							<Tile tileType={TileType.Child}>
								<Box>
									<Title text={'One'}/>
									<Text>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
										Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
									</Text>
								</Box>
							</Tile>

							<Tile tileType={TileType.Child}>
								<Box>
									<Title text={'Two'}/>
									<Text>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
										Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
									</Text>
								</Box>
							</Tile>
						</Tile>

						<Tile tileType={TileType.Parent}>
							<Tile tileType={TileType.Child}>
								<Box>
									<Title text={'Three'}/>
									<Text>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
										Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
									</Text>
									<Text>
										Suspendisse varius ligula in molestie lacinia.
										Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam
										porttitor lorem, et sollicitudin felis neque sit amet erat.
										Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.
										Aenean vitae gravida diam, finibus dignissim turpis.
										Sed eget varius ligula, at volutpat tortor.
									</Text>
									<Text>
										Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor
										consequat libero.
										Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta.
										Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.
									</Text>
								</Box>
							</Tile>
						</Tile>

					</Tiles>
				</Block>
				
				<Block>
					<Breadcrumbs separator={Separator.Arrow}>
						<Breadcrumb text={"Bulma"}/>
						<Breadcrumb text={"Documentation"}/>
						<Breadcrumb text={"Components"}/>
						<Breadcrumb text={"Breadcrumb"} state={State.Active}/>
					</Breadcrumbs>
				</Block>
				
				<Block>
					<Dropdown state={this.state.state}>
						<DropdownTrigger>
							<Button text={"Dropdown button"} onClick={() => {
								if (this.state.state) {
									this.setState({state: null})
								} else {
									this.setState({state: State.Active})
								}
							}}/>
						</DropdownTrigger>
						<DropdownMenu>
							<DropdownContent>
								<DropdownItem text={"Item 1"}/>
								<DropdownItem text={"Item 2"}/>
								<DropdownItem text={"Item 3"} state={State.Active}/>
								<DropdownDivider/>
								<DropdownItem text={"Item 4"}/>
							</DropdownContent>
						</DropdownMenu>
					</Dropdown>

					<Dropdown state={this.state.state} position={Position.Up}>
						<DropdownTrigger>
							<Button text={"Dropdown button"} onClick={() => {
								if (this.state.state) {
									this.setState({state: null})
								} else {
									this.setState({state: State.Active})
								}
							}}/>
						</DropdownTrigger>
						<DropdownMenu>
							<DropdownContent>
								<DropdownItem text={"Item 1"}/>
								<DropdownItem text={"Item 2"}/>
								<DropdownItem text={"Item 3"} state={State.Active}/>
								<DropdownDivider/>
								<DropdownItem text={"Item 4"}/>
							</DropdownContent>
						</DropdownMenu>
					</Dropdown>
				</Block>
				
				<Block>
					<Checkbox text={"Check"}/>
					<Radio name={"r1"}/>
					<Radio name={"r1"}/>
					<Radio name={"r2"}/>
					<Radio name={"r2"}/>
					<Radio name={"r2"}/>
				</Block>
				
				<Block>
					<Modal state={this.state.state}>
						<ModalCard>
							<ModalCardHeader>
								<ModalCardTitle text={"Modal title"}/>
								<Delete/>
							</ModalCardHeader>
							<ModalCardBody>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
							</ModalCardBody>
							<ModalCardFooter>
								<Button text={"Save changes"} type={Type.Success} onClick={() => this.setState({state: null})}/>
								<Button text={"Cancel"}/>
							</ModalCardFooter>
						</ModalCard>
					</Modal>
				</Block>
				
				<Block>
					<Navbar style={Style.Transparent}>
						<NavbarBrand>
							<NavbarItem>
								<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
							</NavbarItem>
							<NavbarBurger/>
						</NavbarBrand>

						<NavbarMenu>
							<NavbarStart>
								<NavbarItem text={"Home"}/>
								<NavbarItem style={Style.Hoverable} mode={Mode.Dropdown}>
									<NavbarLink text={"Docs"} href={""}/>
									<NavbarDropdown style={Style.Boxed}>
										<NavbarItem text={"Item 1"}/>
										<NavbarItem text={"Item 2"}/>
										<NavbarDivider/>
										<NavbarItem text={"Item 3"}/>
										<NavbarItem text={"Components"} state={State.Active}/>
									</NavbarDropdown>
								</NavbarItem>
								<NavbarItem style={Style.Hoverable} mode={Mode.DropdownUp}>
									<NavbarLink text={"Docs"} href={""}/>
									<NavbarDropdown style={Style.Boxed}>
										<NavbarItem text={"Item 1"}/>
										<NavbarItem text={"Item 2"}/>
										<NavbarDivider/>
										<NavbarItem text={"Item 3"}/>
										<NavbarItem text={"Components"} state={State.Active}/>
									</NavbarDropdown>
								</NavbarItem>
							</NavbarStart>
							<NavbarEnd>
								<NavbarItem>
									<Field mode={Mode.Grouped}>
										<Control>
											<Button text={"Twitter"} type={Type.Info}/>
										</Control>
										<Control>
											<Button text={"Download"} type={Type.Primary}/>
										</Control>
									</Field>
								</NavbarItem>
							</NavbarEnd>
						</NavbarMenu>
					</Navbar>

					<Navbar style={Style.Transparent} type={Type.Primary}>
						<NavbarBrand>
							<NavbarItem>
								<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
							</NavbarItem>
							<NavbarBurger/>
						</NavbarBrand>

						<NavbarMenu>
							<NavbarStart>
								<NavbarItem text={"Home"}/>
								<NavbarItem style={Style.Hoverable} mode={Mode.Dropdown}>
									<NavbarLink text={"Docs"} href={""}/>
									<NavbarDropdown style={Style.Boxed}>
										<NavbarItem text={"Item 1"}/>
										<NavbarItem text={"Item 2"}/>
										<NavbarDivider/>
										<NavbarItem text={"Item 3"}/>
										<NavbarItem text={"Components"} state={State.Active}/>
									</NavbarDropdown>
								</NavbarItem>
								<NavbarItem style={Style.Hoverable} mode={Mode.DropdownUp}>
									<NavbarLink text={"Docs"} href={""}/>
									<NavbarDropdown style={Style.Boxed}>
										<NavbarItem text={"Item 1"}/>
										<NavbarItem text={"Item 2"}/>
										<NavbarDivider/>
										<NavbarItem text={"Item 3"}/>
										<NavbarItem text={"Components"} state={State.Active}/>
									</NavbarDropdown>
								</NavbarItem>
							</NavbarStart>
							<NavbarEnd>
								<NavbarItem>
									<Field mode={Mode.Grouped}>
										<Control>
											<Button text={"Twitter"} type={Type.Info}/>
										</Control>
										<Control>
											<Button text={"Download"} type={Type.Primary}/>
										</Control>
									</Field>
								</NavbarItem>
							</NavbarEnd>
						</NavbarMenu>
					</Navbar>

					<Navbar style={Style.Transparent} type={Type.Danger}>
						<NavbarBrand>
							<NavbarItem>
								<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
							</NavbarItem>
							<NavbarBurger/>
						</NavbarBrand>

						<NavbarMenu>
							<NavbarStart>
								<NavbarItem text={"Home"}/>
								<NavbarItem style={Style.Hoverable} mode={Mode.Dropdown}>
									<NavbarLink text={"Docs"} href={""}/>
									<NavbarDropdown style={Style.Boxed}>
										<NavbarItem text={"Item 1"}/>
										<NavbarItem text={"Item 2"}/>
										<NavbarDivider/>
										<NavbarItem text={"Item 3"}/>
										<NavbarItem text={"Components"} state={State.Active}/>
									</NavbarDropdown>
								</NavbarItem>
								<NavbarItem style={Style.Hoverable} mode={Mode.DropdownUp}>
									<NavbarLink text={"Docs"} href={""}/>
									<NavbarDropdown style={Style.Boxed}>
										<NavbarItem text={"Item 1"}/>
										<NavbarItem text={"Item 2"}/>
										<NavbarDivider/>
										<NavbarItem text={"Item 3"}/>
										<NavbarItem text={"Components"} state={State.Active}/>
									</NavbarDropdown>
								</NavbarItem>
							</NavbarStart>
							<NavbarEnd>
								<NavbarItem>
									<Field mode={Mode.Grouped}>
										<Control>
											<Button text={"Twitter"} type={Type.Info}/>
										</Control>
										<Control>
											<Button text={"Download"} type={Type.Primary}/>
										</Control>
									</Field>
								</NavbarItem>
							</NavbarEnd>
						</NavbarMenu>
					</Navbar>
				</Block>
				
				<Block>
					<Pagination position={Position.Center}>
						<PaginationPrevious text={"Previous"}/>
						<PaginationNext text={"Previous"}/>
						<PaginationList>
							<PaginationListItem>
								<PaginationLink text={"1"}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationRange text={<span>&hellip;</span>}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationLink text={"10"}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationLink text={"11"} state={State.Current}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationLink text={"12"}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationRange text={<span>&hellip;</span>}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationLink text={"21"}/>
							</PaginationListItem>
						</PaginationList>
					</Pagination>

					<Pagination position={Position.Right}>
						<PaginationPrevious text={"Previous"}/>
						<PaginationNext text={"Previous"}/>
						<PaginationList>
							<PaginationListItem>
								<PaginationLink text={"1"}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationRange text={<span>&hellip;</span>}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationLink text={"10"}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationLink text={"11"} state={State.Current}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationLink text={"12"}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationRange text={<span>&hellip;</span>}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationLink text={"21"}/>
							</PaginationListItem>
						</PaginationList>
					</Pagination>

					<Pagination position={Position.Left}>
						<PaginationPrevious text={"Previous"}/>
						<PaginationNext text={"Previous"}/>
						<PaginationList>
							<PaginationListItem>
								<PaginationLink text={"1"}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationRange text={<span>&hellip;</span>}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationLink text={"10"}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationLink text={"11"} state={State.Current}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationLink text={"12"}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationRange text={<span>&hellip;</span>}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationLink text={"21"}/>
							</PaginationListItem>
						</PaginationList>
					</Pagination>

					<Pagination position={Position.Center} style={Style.Rounded}>
						<PaginationPrevious text={"Previous"}/>
						<PaginationNext text={"Previous"}/>
						<PaginationList>
							<PaginationListItem>
								<PaginationLink text={"1"}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationRange text={<span>&hellip;</span>}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationLink text={"10"}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationLink text={"11"} state={State.Current}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationLink text={"12"}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationRange text={<span>&hellip;</span>}/>
							</PaginationListItem>
							<PaginationListItem>
								<PaginationLink text={"21"}/>
							</PaginationListItem>
						</PaginationList>
					</Pagination>
				</Block>
				<Block>
					<Switch text={"Switch"} 
						checked={this.state.switch} 
						name={'switchColorDefault'}/>

					<Switch text={"Switch rtl"}
						name={'switchColorRtl'}
						checked={this.state.switch}
						mode={Mode.RightToLeft}/>
					
					<Switch text={"Switch rtl"} 
						name={'switchColorRtl'}
						checked={this.state.switch}
						mode={Mode.RightToLeft}/>

					<Switch text={"Switch p"}
						name={'switchColorPrimary'}
						checked={this.state.switch}
						type={Type.Primary}
						mode={Mode.RightToLeft}/>

					<Switch text={"Switch w"}
						name={'switchColorWarning'}
						checked={this.state.switch}
						type={Type.Warning}/>

					<Switch text={"Switch s"}
						name={'switchColorSuccess'}
						checked={this.state.switch}
						onClick={() => this.setState({...this.state, switch: !this.state.switch})}
						type={Type.Success}/>
				</Block>
				
				<Block>
					<Badge data={10} text={"Badge 1"}/>
					<Badge text={"Badge 2"} 
						type={Type.Primary}
						badgeType={BadgeType.Primary}/>
					<Badge data={11} text={"Badge 3"} 
						type={Type.Success}
						badgeType={BadgeType.Success}/>
					<Badge data={12} text={"Badge 4"}
						type={Type.Danger}
						badgeType={BadgeType.Danger}/>
					<Badge data={13} text={"Badge 5"}
						type={Type.Info}
						badgeType={BadgeType.Info}/>
					<Badge data={""} text={"Badge 6"}
						type={Type.Warning}
						badgeType={BadgeType.Warning}/>
					<Badge data={14} text={"Badge 7"}
						type={Type.Dark}
						badgeType={BadgeType.Dark}/>
				</Block>
				<Block>
					<Badge data={10} text={"Badge 1"} 
						style={Style.Outlined}/>
					<Badge text={"Badge 2"} type={Type.Primary} style={Style.Outlined}/>
					<Badge data={11} text={"Badge 3"} type={Type.Success} style={Style.Outlined}/>
					<Badge data={12} text={"Badge 4"} type={Type.Danger} style={Style.Outlined}/>
					<Badge data={13} text={"Badge 5"} type={Type.Info} style={Style.Outlined}/>
					<Badge data={""} text={"Badge 6"} type={Type.Warning} style={Style.Outlined}/>
					<Badge data={14} text={"Badge 7"} type={Type.Dark} style={Style.Outlined}/>
				</Block>
				<Block>
					<Badge data={10} text={"Badge 1"}
						style={Style.Outlined}/>
					<Badge text={"Badge 2"} type={Type.Primary} style={Style.Outlined}/>
					<Badge data={11} text={"Badge 3"} type={Type.Success} style={Style.Outlined}/>
					<Badge data={12} text={"Badge 4"} type={Type.Danger} style={Style.Outlined}/>
					<Badge data={13} text={"Badge 5"} type={Type.Info} 
						style={Style.Outlined}
						badgePosition={BadgePosition.Left}/>
					<Badge data={""} text={"Badge 6"} type={Type.Warning} 
						style={Style.Outlined}
						badgePosition={BadgePosition.Bottom}/>
					<Badge data={14} text={"Badge 7"} type={Type.Dark} 
						style={Style.Outlined}
						badgePosition={BadgePosition.BottomLeft}/>
				</Block>
				<Block>
					<Columns platform={Platform.Mobile}>
						<Column><SpanBadge data={10} text={"Badge 1"} style={Style.Outlined}/></Column>
						<Column><SpanBadge text={"Badge 2"} type={Type.Primary} style={Style.Outlined}/></Column>
						<Column><SpanBadge data={11} text={"Badge 3"} type={Type.Success} style={Style.Outlined}/></Column>
						<Column><SpanBadge data={11} text={"Badge 3"} type={Type.Success} style={Style.Outlined}/></Column>
						<Column><SpanBadge data={12} text={"Badge 4"} type={Type.Danger} style={Style.Outlined}/></Column>
						<Column>
							<SpanBadge data={13} text={"Badge 5"} type={Type.Info}
								style={Style.Outlined}
								badgePosition={BadgePosition.Left}/>
						</Column>
						<Column>
							<SpanBadge data={""} text={"Badge 6"} type={Type.Warning}
								style={Style.Outlined}
								badgePosition={BadgePosition.Bottom}/>
						</Column>
						<Column>
							<SpanBadge data={14} text={"Badge 7"} type={Type.Dark}
								style={Style.Outlined}
								badgePosition={BadgePosition.BottomLeft}/>
						</Column>
					</Columns>
				</Block>
				<Block>
					<Tooltip type={Type.Primary} text={"Tooltip 1"} tooltip={"Tooltip 1"}/>
					<Tooltip tooltipType={TooltipType.Danger} tooltipPosition={TooltipPosition.Right} type={Type.Danger} text={"Tooltip 1"} tooltip={"Tooltip 1"}/>
					<Tooltip tooltipType={TooltipType.Warning} tooltipPosition={TooltipPosition.Bottom} type={Type.Warning} text={"Tooltip 1"} tooltip={"Tooltip 1"}/>
					<Tooltip tooltipType={TooltipType.Info} tooltipPosition={TooltipPosition.Left} type={Type.Info} text={"Tooltip 1"} tooltip={"Tooltip 1"}/>
				</Block>
				
				<Pageloader state={this.state.pageloader}>
					<Title text={"Preloader"}/>
				</Pageloader>
			</Container>
		)
	}
}

