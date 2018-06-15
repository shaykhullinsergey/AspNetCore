import * as React from 'react'

import {Columnns, Mode, Platform, Size, State, Style, Type} from 'Controls'

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
import {Tiles} from "Controls/Tile/Tiles"
import {Tile, TileType} from "Controls/Tile/Tile"

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
						<Title text={"Hello World I'm Box"}/>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, quibusdam.
						</Text>
					</Box>
				</Block>
				
				<Block>
					<Title text={"Notifications"} columns={Columnns.One}/>
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
					<Title text={"Tags"} columns={Columnns.One}/>
					<Tag text={"Hello"}/>
					<Tag text={"Hello"} type={Type.Black}/>
					<Tag text={"Hello"} type={Type.Dark}/>
					<Tag text={"Hello"} type={Type.Light}/>
					<Tag text={"Hello"} type={Type.White}/>
					<Tag text={"Hello"} type={Type.Primary}/>
					<Tag text={"Hello"} type={Type.Info}/>
					<Tag text={"Hello"} type={Type.Success}/>
					<Tag text={"Hello"} type={Type.Warning}/>
					<Tag text={"Hello"} type={Type.Danger}>
						<Delete/>
					</Tag>
				</Block>
				
				<Block>
					<Title text={"Messages"} columns={Columnns.One}/>
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
							<Text text={"About us"}/>
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
						<MenuLabel text={"Label 1"}/>
						<MenuList>
							<MenuListItem>
								<Link text={"Text 1"}/>
								<Link text={"Text 2"}/>
							</MenuListItem>
						</MenuList>
						<MenuLabel text={"Label 2"}/>
						<MenuList>
							<MenuListItem>
								<Link text={"Text 23"} state={State.Active}/>
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
					<Hero type={Type.Primary}>
						<HeroBody>
							<Container>
								<Title text={"Hero Title"}/>
								<Subtitle text={"Hero subtitle"}/>
							</Container>
						</HeroBody>
					</Hero>
					<Hero type={Type.Success}>
						<HeroBody>
							<Container>
								<Title text={"Hero Title"}/>
								<Subtitle text={"Hero subtitle"}/>
							</Container>
						</HeroBody>
					</Hero>
					<Hero type={Type.Warning}>
						<HeroBody>
							<Container>
								<Title text={"Hero Title"}/>
								<Subtitle text={"Hero subtitle"}/>
							</Container>
						</HeroBody>
					</Hero>
					<Hero type={Type.Danger}>
						<HeroBody>
							<Container>
								<Title text={"Hero Title"}/>
								<Subtitle text={"Hero subtitle"}/>
							</Container>
						</HeroBody>
					</Hero>
					<Hero type={Type.Info}>
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
								<Button text={"New"} type={Type.Primary}/>
							</LevelItem>
						</LevelLeft>
						<LevelRight>
							<LevelItem>
								<Field>
									<Control>
										<Textbox placeholder={"Search posts..."}/>
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
							<Textbox placeholder={"Enter name"}/>
						</Field>
						<Field>
							<Label text={"Email"}/>
							<Textbox inputType={InputType.Email} 
								type={Type.Success}
								placeholder={"Enter email"}/>
						</Field>
						<Field>
							<Label text={"Number"}/>
							<Textbox inputType={InputType.Number}
								type={Type.Danger}
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
						<Column columns={Columnns.Six}>
							<Notification text={"Text 1"} type={Type.Danger}/>
						</Column>
						<Column>
							<Notification text={"Text 2"} type={Type.Warning}/>
						</Column>
						<Column>
							<Notification text={"Text 3"} type={Type.Success}/>
						</Column>
					</Columns>
				</Block>
				<Block>
					<Button text={"Hello"} type={Type.Primary}/>
				</Block>
				
				<Block>
					<Tiles>
						<Tile mode={Mode.Vertical} tileType={TileType.Parent} columns={Columnns.Four}>
							<Tile tileType={TileType.Child}>
								<Box>
									<Title text={"One"}/>
									<Text>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
										Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
									</Text>
								</Box>
							</Tile>
							
							<Tile tileType={TileType.Child}>
								<Box>
									<Title text={"Two"}/>
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
									<Title text={"Three"}/>
									<Text>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
										Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
									</Text>
									<Text>
										Suspendisse varius ligula in molestie lacinia. 
										Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.
										Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.
										Aenean vitae gravida diam, finibus dignissim turpis.
										Sed eget varius ligula, at volutpat tortor.
									</Text>
									<Text>
										Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. 
										Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. 
										Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.
									</Text>
								</Box>
							</Tile>
						</Tile>
						
					</Tiles>
				</Block>
			</Container>
		)
	}
}

