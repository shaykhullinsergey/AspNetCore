import * as React from 'react'

import { ControlColumns, ControlSize, ControlState, ControlStyle, ControlType } from 'Controls'

import { MessageViewModel } from 'Components/Message'
import { Container } from 'Controls/Container'
import { Block } from 'Controls/Block'
import { Title } from 'Controls/Title'
import { Subtitle } from 'Controls/Subtitle'
import { Content } from 'Controls/Content/Content'
import { Button } from 'Controls/Button/Button'
import { Box } from 'Controls/Box/Box'
import { Text } from 'Controls/Text/Text'
import { Notification } from 'Controls/Notification/Notification'
import { Delete } from 'Controls/Delete/Delete'
import { Tag } from 'Controls/Tag/Tag'
import { Message } from 'Controls/Message/Message'
import { MessageHeader } from 'Controls/Message/MessageHeader'
import { MessageBody } from 'Controls/Message/MessageBody'
import { Menu } from 'Controls/Menu/Menu'
import { MenuLabel } from 'Controls/Menu/MenuLabel'
import { MenuList } from 'Controls/Menu/MenuList'
import { MenuListItem } from 'Controls/Menu/MenuListItem'
import { Link } from 'Controls/Link/Link'
import { Hero } from 'Controls/Hero/Hero'
import { HeroBody } from 'Controls/Hero/HeroBody'
import { Card } from 'Controls/Card/Card'
import { CardContent } from 'Controls/Card/CardContent'
import { CardFooter } from 'Controls/Card/CardFooter'
import { CardFooterItem } from 'Controls/Card/CardFooterItem'
import { Level } from 'Controls/Level/Level'
import { LevelLeft } from 'Controls/Level/LevelLeft'
import { LevelItem } from 'Controls/Level/LevelItem'
import { LevelRight } from 'Controls/Level/LevelRight'
import { Field } from 'Controls/Field/Field'
import { Control } from 'Controls/Control/Control'
import { Input, InputInputType } from 'Controls/Input/Input'
import { Form } from 'Controls/Form/Form'
import { Label } from 'Controls/Label/Label'
import { Select } from 'Controls/Select/Select'
import { Textarea } from 'Controls/Textarea/Textarea'
import { Columns } from 'Controls/Column/Columns'
import { Column } from 'Controls/Column/Column'

export interface MessageComponentState {
	messages: MessageViewModel[];
}

export class MessageComponent extends React.Component<{}, MessageComponentState> {

	constructor(props: {}) {
		super(props)
		this.state = { messages: null }
	}

	public componentDidMount() {
		// this.updateMessages()
	}

	// private updateMessages() {
	// 	Controller
	// 		.getAllMessages()
	// 		.then(responce => this.setState({ messages: responce.data.messages }))
	// }

	public render() {

		return (
			<Container>
				<Block>
					<Title text={'headings'}
						columns={ControlColumns.One}/>
					<Subtitle text={'subtitle'}/>
				</Block>

				<Block>
					<Title text={'Content'}/>
					<Content size={ControlSize.Small}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quae!
					</Content>
					<Content size={ControlSize.Medium}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quae!
					</Content>
					<Content size={ControlSize.Large}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quae!
					</Content>
				</Block>

				<Block>
					<Title text={'Buttons'} columns={ControlColumns.One}/>
					<Button text={'Button'}/>
					<Button text={'Button'} type={ControlType.White}/>
					<Button text={'Button'} type={ControlType.Light}/>
					<Button text={'Button'} type={ControlType.Dark}/>
					<Button text={'Button'} type={ControlType.Black}/>
					<Button text={'Button'} type={ControlType.Link}/>
				</Block>
				
				<Block>
					<Button text={'Button'} type={ControlType.Primary}/>
					<Button text={'Button'} type={ControlType.Info}/>
					<Button text={'Button'} type={ControlType.Success}/>
					<Button text={'Button'} type={ControlType.Warning}/>
					<Button text={'Button'} type={ControlType.Danger}/>
				</Block>

				<Block>
					<Button text={'Button'} type={ControlType.Primary} size={ControlSize.Small}/>
					<Button text={'Button'} type={ControlType.Info} size={ControlSize.Medium}/>
					<Button text={'Button'} type={ControlType.Success} size={ControlSize.Large}/>
				</Block>

				<Block>
					<Button text={'Button'} type={ControlType.Primary} style={ControlStyle.Outlined}/>
					<Button text={'Button'} type={ControlType.Info} style={ControlStyle.Outlined}/>
					<Button text={'Button'} type={ControlType.Success} style={ControlStyle.Outlined}/>
					<Button text={'Button'} type={ControlType.Warning} style={ControlStyle.Outlined}/>
					<Button text={'Button'} type={ControlType.Danger} style={ControlStyle.Outlined}/>
				</Block>

				<Block>
					<Button text={'Button'} type={ControlType.Primary} style={ControlStyle.Inverted}/>
					<Button text={'Button'} type={ControlType.Info} style={ControlStyle.Inverted}/>
					<Button text={'Button'} type={ControlType.Success} style={ControlStyle.Inverted}/>
					<Button text={'Button'} type={ControlType.Warning} style={ControlStyle.Inverted}/>
					<Button text={'Button'} type={ControlType.Danger} style={ControlStyle.Inverted}/>
				</Block>

				<Block>
					<Button text={'Button'} state={ControlState.Hovered}/>
					<Button text={'Button'} state={ControlState.Focused}/>
					<Button text={'Button'} state={ControlState.Active}/>
					<Button text={'Button'} state={ControlState.Loading}/>
					<Button text={'Button'} state={ControlState.Disabled}/>
				</Block>
				
				<Block>
					<Title text={'Box'} columns={ControlColumns.One}/>
					<Box>
						<Title text={"Hello World I'm Box"}/>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, quibusdam.
						</Text>
					</Box>
				</Block>
				
				<Block>
					<Title text={"Notifications"} columns={ControlColumns.One}/>
					<Notification>
						<Delete/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea error itaque minus.
					</Notification>
					<Notification type={ControlType.Primary}>
						<Delete/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea error itaque minus.
					</Notification>
					<Notification type={ControlType.Info}>
						<Delete/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea error itaque minus.
					</Notification>
					<Notification type={ControlType.Success}>
						<Delete/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea error itaque minus.
					</Notification>
					<Notification type={ControlType.Warning}>
						<Delete/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea error itaque minus.
					</Notification>
					<Notification type={ControlType.Danger}>
						<Delete/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea error itaque minus.
					</Notification>
				</Block>
				
				<Block>
					<Title text={"Tags"} columns={ControlColumns.One}/>
					<Tag text={"Hello"}/>
					<Tag text={"Hello"} type={ControlType.Black}/>
					<Tag text={"Hello"} type={ControlType.Dark}/>
					<Tag text={"Hello"} type={ControlType.Light}/>
					<Tag text={"Hello"} type={ControlType.White}/>
					<Tag text={"Hello"} type={ControlType.Primary}/>
					<Tag text={"Hello"} type={ControlType.Info}/>
					<Tag text={"Hello"} type={ControlType.Success}/>
					<Tag text={"Hello"} type={ControlType.Warning}/>
					<Tag text={"Hello"} type={ControlType.Danger}>
						<Delete/>
					</Tag>
				</Block>
				
				<Block>
					<Title text={"Messages"} columns={ControlColumns.One}/>
					<Message type={ControlType.Primary}>
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
					<Message type={ControlType.Success}>
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
					<Message type={ControlType.Info}>
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
					<Message type={ControlType.Warning}>
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
					<Message type={ControlType.Danger}>
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
				</Block>
								
				<Block>
					<Menu>
						<MenuLabel>
							Label 1
						</MenuLabel>
						<MenuList>
							<MenuListItem>
								<Link text={"Text 1"}/>
								<Link text={"Text 2"}/>
							</MenuListItem>
						</MenuList>
						<MenuLabel>
							Label 2
						</MenuLabel>
						<MenuList>
							<MenuListItem>
								<Link text={"Text 23"} state={ControlState.Active}/>
								<MenuList>
									<MenuListItem>
										<Link text={"Text 1"}/>
										<Link text={"Text 2"}/>
										<Link text={"Text 3"}/>
									</MenuListItem>
								</MenuList>
							</MenuListItem>
						</MenuList>
					</Menu>
				</Block>
				
				<Block>
					<Title text={"Hero Banner"}/>
					<Hero>
						<HeroBody>
							<Container>
								<Title text={"Hero Title"}/>
								<Subtitle text={"Hero subtitle"}/>
							</Container>
						</HeroBody>
					</Hero>
					<Hero type={ControlType.Primary}>
						<HeroBody>
							<Container>
								<Title text={"Hero Title"}/>
								<Subtitle text={"Hero subtitle"}/>
							</Container>
						</HeroBody>
					</Hero>
					<Hero type={ControlType.Success}>
						<HeroBody>
							<Container>
								<Title text={"Hero Title"}/>
								<Subtitle text={"Hero subtitle"}/>
							</Container>
						</HeroBody>
					</Hero>
					<Hero type={ControlType.Warning}>
						<HeroBody>
							<Container>
								<Title text={"Hero Title"}/>
								<Subtitle text={"Hero subtitle"}/>
							</Container>
						</HeroBody>
					</Hero>
					<Hero type={ControlType.Danger}>
						<HeroBody>
							<Container>
								<Title text={"Hero Title"}/>
								<Subtitle text={"Hero subtitle"}/>
							</Container>
						</HeroBody>
					</Hero>
					<Hero type={ControlType.Info}>
						<HeroBody>
							<Container>
								<Title text={"Hero Title"}/>
								<Subtitle text={"Hero subtitle"}/>
							</Container>
						</HeroBody>
					</Hero>
				</Block>
				
				<Block>
					<Title text={"Card"}/>
					<Card>
						<CardContent>
							<Title text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur obcaecati possimus quae quibusdam!"}/>
						</CardContent>
						<CardFooter>
							<CardFooterItem>
								<Text text={"Item1"}/>
							</CardFooterItem>
							<CardFooterItem>
								<Text text={"Item2"}/>
							</CardFooterItem>
						</CardFooter>
					</Card>
				</Block>
				<Block>
					<Title text={"Level"}/>
					<Level>
						<LevelLeft>
							<LevelItem>
								<Link text={"All"} />
							</LevelItem>
							<LevelItem>
								<Link text={"Published"} />
							</LevelItem>
							<LevelItem>
								<Link text={"Draft"} />
							</LevelItem>
							<LevelItem>
								<Link text={"Deleted"} />
							</LevelItem>
							<LevelItem>
								<Button text={"New"} type={ControlType.Primary}/>
							</LevelItem>
						</LevelLeft>
						<LevelRight>
							<LevelItem>
								<Field>
									<Control>
										<Input placeholder={"Search posts..."}/>
									</Control>
								</Field>
							</LevelItem>
						</LevelRight>
					</Level>
				</Block>
				
				<Block>
					<Title text={"Forms"}/>
					<Form>
						<Field>
							<Label text={"Name"}/>
							<Input placeholder={"Enter name"}/>
						</Field>
						<Field>
							<Label text={"Email"}/>
							<Input inputType={InputInputType.Email} 
								type={ControlType.Success}
								placeholder={"Enter email"}/>
						</Field>
						<Field>
							<Label text={"Number"}/>
							<Input inputType={InputInputType.Number}
								type={ControlType.Danger}
								placeholder={"Enter number"}/>
						</Field>
						<Field>
							<Label text={"Package"}/>
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
							<Label text={"Message"}/>
							<Control>
								<Textarea placeholder={"Message"}/>
							</Control>
						</Field>
					</Form>
				</Block>
				<Block>
					<Columns>
						<Column columns={ControlColumns.Six}>
							<Notification text={"Text 1"} type={ControlType.Danger}/>
						</Column>
						<Column>
							<Notification text={"Text 2"} type={ControlType.Warning}/>
						</Column>
						<Column>
							<Notification text={"Text 3"} type={ControlType.Success}/>
						</Column>
					</Columns>
				</Block>
			</Container>
		)
	}
}

