"use client";

import Link from "next/link";
import { useState } from "react";
import PhotoIcon from "../components/Icons/PhotoIcon";
import HeaderNav from "../components/HeaderNav";
import strings from "../strings";
import {
  Avatar,
  Alert,
  Accordion,
  Card,
  Skeleton,
  Tabs,
  Dropdown,
  Button,
  Modal,
  Popover,
  Tooltip,
  Kbd,
  Switch,
  Slider,
  Calendar,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Select,
  Form,
  Input,
  Separator,
  Label,
  Description,
  ListBox,
  TextArea,
  InputOTP,
  FieldError,
  TextField,
  Spinner,
  CloseButton,
} from "@heroui/react";
import SunIcon from "../components/Icons/SunIcon";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>();

  const horizontalClassname = "flex flex-wrap gap-4";

  const accordionItems = [
    { content: "item content", title: "item title" },
    { content: "item content", title: "item title" },
    { content: "item content", title: "item title" },
  ];

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <section className="flex flex-col gap-4">
      <HeaderNav />
      <h2 className="text-center text-2xl">{strings.styleguide}</h2>

      <header>
        <h1>Heading h1</h1>
        <h2>Heading h2</h2>
        <h3>Heading h3</h3>
        <h4>Heading h4</h4>
        <h5>Heading h5</h5>
        <h6>Heading h6</h6>
      </header>

      <section>
        <div>
          <p>
            <Link href="#">A link</Link> in a paragraph, in a div, in a section.
          </p>
        </div>
      </section>

      <div className="flex flex-col gap-3">
        Horizontal separator
        <Separator className="w-1/2" />
        <div className="flex space-x-4">
          <div>vertical</div>
          <Separator className="min-h-[150px]" orientation="vertical" />
          <div>divider</div>
        </div>
      </div>

      <div>
        <div></div>
        Avatar
        <Avatar size="sm">
          <Avatar.Image alt="small avatar" src="image.png" />
        </Avatar>
        Photo Icon
        <PhotoIcon height={"150px"} />
      </div>

      <div className="flex flex-col gap-1">
        Button variants
        <div className="flex flex-wrap gap-3">
          <Button>Default (primary)</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="danger-soft">Danger Soft</Button>
        </div>
        <div className="flex flex-col">
          Colors
          <div className="my-3 flex flex-wrap gap-2">
            <div className="flex flex-col items-center gap-2">
              <div
                className="focus:ring-accent shadow-surface group relative size-10 rounded-full transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: "var(--primary)" }}
              ></div>
              <div className="text-center">
                <div className="text-xs font-medium">--primary</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="focus:ring-accent shadow-surface group relative size-10 rounded-full transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: "var(--success)" }}
              ></div>
              <div className="text-center">
                <div className="text-xs font-medium">--success</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="focus:ring-accent shadow-surface group relative size-10 rounded-full transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: "var(--success-foreground)" }}
              ></div>
              <div className="text-center">
                <div className="text-xs font-medium">--success-foreground</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="focus:ring-accent shadow-surface group relative size-10 rounded-full transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: "var(--warning)" }}
              ></div>
              <div className="text-center">
                <div className="text-xs font-medium">--warning</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="focus:ring-accent shadow-surface group relative size-10 rounded-full transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: "var(--warning-foreground)" }}
              ></div>
              <div className="text-center">
                <div className="text-xs font-medium">--warning-foreground</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="focus:ring-accent shadow-surface group relative size-10 rounded-full transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: "var(--danger)" }}
              ></div>
              <div className="text-center">
                <div className="text-xs font-medium">--danger</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="focus:ring-accent shadow-surface group relative size-10 rounded-full transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: "var(--danger-foreground)" }}
              ></div>
              <div className="text-center">
                <div className="text-xs font-medium">--danger-foreground</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        Spinners
        <div className="flex items-center gap-8 mt-3">
          <div className="flex flex-col items-center gap-2">
            <Spinner color="current" />
            <span className="text-muted text-xs">Current</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner color="accent" />
            <span className="text-muted text-xs">Accent</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner color="success" />
            <span className="text-muted text-xs">Success</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner color="warning" />
            <span className="text-muted text-xs">Warning</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner color="danger" />
            <span className="text-muted text-xs">Danger</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Spinner size="sm" />
            <span className="text-muted text-xs">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="md" />
            <span className="text-muted text-xs">Medium</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" />
            <span className="text-muted text-xs">Large</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="xl" />
            <span className="text-muted text-xs">Extra Large</span>
          </div>
        </div>
      </div>

      <div>
        Alerts
        <div className="grid w-full max-w-xl gap-4">
          {/* Default - General information */}
          <Alert>
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>New features available</Alert.Title>
              <Alert.Description>
                Check out our latest updates including dark mode support and
                improved accessibility features.
              </Alert.Description>
            </Alert.Content>
          </Alert>
          {/* Accent - Important information with action */}
          <Alert status="accent">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>Update available</Alert.Title>
              <Alert.Description>
                A new version of the application is available. Please refresh to
                get the latest features and bug fixes.
              </Alert.Description>
              <Button className="mt-2 sm:hidden" size="sm" variant="primary">
                Refresh
              </Button>
            </Alert.Content>
            <Button className="hidden sm:block" size="sm" variant="primary">
              Refresh
            </Button>
          </Alert>
          {/* Danger - Error with detailed steps */}
          <Alert status="danger">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>Unable to connect to server</Alert.Title>
              <Alert.Description>
                We're experiencing connection issues. Please try the following:
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                  <li>Check your internet connection</li>
                  <li>Refresh the page</li>
                  <li>Clear your browser cache</li>
                </ul>
              </Alert.Description>
              <Button className="mt-2 sm:hidden" size="sm" variant="danger">
                Retry
              </Button>
            </Alert.Content>
            <Button className="hidden sm:block" size="sm" variant="danger">
              Retry
            </Button>
          </Alert>
          {/* Without description */}
          <Alert status="success">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>Profile updated successfully</Alert.Title>
            </Alert.Content>
            <CloseButton />
          </Alert>
          {/* Custom indicator - Loading state */}
          <Alert status="accent">
            <Alert.Indicator>
              <Spinner size="sm" />
            </Alert.Indicator>
            <Alert.Content>
              <Alert.Title>Processing your request</Alert.Title>
              <Alert.Description>
                Please wait while we sync your data. This may take a few
                moments.
              </Alert.Description>
            </Alert.Content>
          </Alert>
          {/* Without close button */}
          <Alert status="warning">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>Scheduled maintenance</Alert.Title>
              <Alert.Description>
                Our services will be unavailable on Sunday, March 15th from 2:00
                AM to 6:00 AM UTC for scheduled maintenance.
              </Alert.Description>
            </Alert.Content>
          </Alert>
        </div>
      </div>

      <div className={horizontalClassname}>
        Accordion
        <Accordion>
          {accordionItems.map((item, index) => (
            <Accordion.Item key={index}>
              <Accordion.Heading>
                <Accordion.Trigger>
                  {item.title}
                  <Accordion.Indicator>x</Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>{item.content}</Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
        Tabs
        <Tabs className="w-full">
          <Tabs.ListContainer>
            <Tabs.List aria-label="Options">
              <Tabs.Tab id="overview">
                Overview
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="analytics">
                Analytics
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="reports">
                Reports
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
          <Tabs.Panel className="pt-4" id="overview">
            <p>View your project overview and recent activity.</p>
          </Tabs.Panel>
          <Tabs.Panel className="pt-4" id="analytics">
            <p>Track your metrics and analyze performance data.</p>
          </Tabs.Panel>
          <Tabs.Panel className="pt-4" id="reports">
            <p>Generate and download detailed reports.</p>
          </Tabs.Panel>
        </Tabs>
      </div>

      <div>
        Card and Skeleton
        <div className={horizontalClassname}>
          <Card className="w-[200px] space-y-5 p-4">
            <Card.Header>Card header</Card.Header>
            <Card.Content>Card content</Card.Content>
            <Card.Footer>Card footer</Card.Footer>
          </Card>
          <Card className="w-[200px] space-y-5 p-4">
            <Skeleton className="h-24 rounded-lg bg-default-300 rounded-lg" />
            <div className="space-y-3">
              <Skeleton className=" h-3 w-3/5 rounded-lg bg-default-300" />
              <Skeleton className=" h-3 w-4/5 rounded-lg bg-default-300" />
              <Skeleton className=" h-3 w-2/5 rounded-lg bg-default-300" />
            </div>
          </Card>
        </div>
      </div>

      <div>
        Dropdown, Modal, Popover, Tooltips
        <div className="flex gap-4">
          <Dropdown>
            <Button aria-label="Menu" variant="secondary">
              Actions
            </Button>
            <Dropdown.Popover>
              <Dropdown.Menu
                onAction={(key) => console.log(`Selected: ${key}`)}
              >
                <Dropdown.Item id="new-file" textValue="New file">
                  <Label>New file</Label>
                </Dropdown.Item>
                <Dropdown.Item id="copy-link" textValue="Copy link">
                  <Label>Copy link</Label>
                </Dropdown.Item>
                <Dropdown.Item id="edit-file" textValue="Edit file">
                  <Label>Edit file</Label>
                </Dropdown.Item>
                <Dropdown.Item
                  id="delete-file"
                  textValue="Delete file"
                  variant="danger"
                >
                  <Label>Delete file</Label>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>

          <Button onPress={() => setIsModalOpen(!isModalOpen)}>
            Open Modal
          </Button>
          <Modal
            isOpen={isModalOpen}
            onOpenChange={() => setIsModalOpen(!isModalOpen)}
          >
            <Modal.Container>
              <Modal.Dialog>
                {(onClose) => (
                  <>
                    <Modal.Header className="flex flex-col gap-1">
                      Modal Title
                    </Modal.Header>
                    <Modal.Body>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Magna exercitation reprehenderit magna aute tempor
                        cupidatat consequat elit dolor adipisicing. Mollit dolor
                        eiusmod sunt ex incididunt cillum quis. Velit duis sit
                        officia eiusmod Lorem aliqua enim laboris do dolor
                        eiusmod. Et mollit incididunt nisi consectetur esse
                        laborum eiusmod pariatur proident Lorem eiusmod et.
                        Culpa deserunt nostrud ad veniam.
                      </p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="danger" onPress={() => onClose}>
                        Close
                      </Button>
                      <Button variant="primary" onPress={() => onClose}>
                        Action
                      </Button>
                    </Modal.Footer>
                  </>
                )}
              </Modal.Dialog>
            </Modal.Container>
          </Modal>

          <Popover>
            <Popover.Trigger>
              <Button>Open Popover</Button>
            </Popover.Trigger>
            <Popover.Content placement="right">
              <div className="px-1 py-2">
                <div className="text-small font-bold">Popover Content</div>
                <div className="text-tiny">This is the popover content</div>
              </div>
            </Popover.Content>
          </Popover>

          <Tooltip delay={0}>
            <Button variant="secondary">Hover me</Button>
            <Tooltip.Content>
              <p>This is a tooltip</p>
            </Tooltip.Content>
          </Tooltip>
          <Tooltip delay={0}>
            <Button isIconOnly variant="tertiary">
              <SunIcon />
            </Button>
            <Tooltip.Content>
              <p>More information</p>
            </Tooltip.Content>
          </Tooltip>
        </div>
      </div>

      <div>
        Kbd and Switch
        <div className={horizontalClassname}>
          <Kbd>
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>K</Kbd.Content>
          </Kbd>
          <Kbd>
            <Kbd.Abbr keyValue="shift" />
            <Kbd.Content>P</Kbd.Content>
          </Kbd>
          <Kbd>
            <Kbd.Abbr keyValue="ctrl" />
            <Kbd.Content>C</Kbd.Content>
          </Kbd>
          <Kbd>
            <Kbd.Abbr keyValue="option" />
            <Kbd.Content>D</Kbd.Content>
          </Kbd>

          <Switch>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Label className="text-sm">Enable notifications</Label>
          </Switch>
        </div>
      </div>

      <div>
        Sliders
        <div className={horizontalClassname}>
          <Slider className="w-full max-w-xs" defaultValue={30}>
            <Label>Volume</Label>
            <Slider.Output />
            <Slider.Track>
              <Slider.Fill />
              <Slider.Thumb />
            </Slider.Track>
          </Slider>

          <Slider
            className="w-full max-w-xs"
            defaultValue={[100, 500]}
            formatOptions={{ currency: "USD", style: "currency" }}
            maxValue={1000}
            minValue={0}
            step={50}
          >
            <Label>Price Range</Label>
            <Slider.Output />
            <Slider.Track>
              {({ state }) => (
                <>
                  <Slider.Fill />
                  {state.values.map((_, i) => (
                    <Slider.Thumb key={i} index={i} />
                  ))}
                </>
              )}
            </Slider.Track>
          </Slider>

          <div className="flex h-64 items-center justify-center">
            <Slider className="h-full" defaultValue={30} orientation="vertical">
              <Label>Volume</Label>
              <Slider.Output />
              <Slider.Track>
                <Slider.Fill />
                <Slider.Thumb />
              </Slider.Track>
            </Slider>
          </div>

          <Slider isDisabled className="w-full max-w-xs" defaultValue={30}>
            <Label>Volume</Label>
            <Slider.Output />
            <Slider.Track>
              <Slider.Fill />
              <Slider.Thumb />
            </Slider.Track>
          </Slider>
        </div>
      </div>

      <div>
        Checkbox and Radio Group
        <div className={horizontalClassname}>
          <CheckboxGroup name="interests">
            <Label>Select your interests</Label>
            <Description>Choose all that apply</Description>
            <Checkbox value="coding">
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Content>
                <Label>Coding</Label>
                <Description>Love building software</Description>
              </Checkbox.Content>
            </Checkbox>
            <Checkbox value="design">
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Content>
                <Label>Design</Label>
                <Description>Enjoy creating beautiful interfaces</Description>
              </Checkbox.Content>
            </Checkbox>
            <Checkbox value="writing">
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Content>
                <Label>Writing</Label>
                <Description>Passionate about content creation</Description>
              </Checkbox.Content>
            </Checkbox>
          </CheckboxGroup>

          <RadioGroup defaultValue="premium" name="plan">
            <Label>Plan selection</Label>
            <Description>Choose the plan that suits you best</Description>
            <Radio value="basic">
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Radio.Content>
                <Label>Basic Plan</Label>
                <Description>Includes 100 messages per month</Description>
              </Radio.Content>
            </Radio>
            <Radio value="premium">
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Radio.Content>
                <Label>Premium Plan</Label>
                <Description>Includes 200 messages per month</Description>
              </Radio.Content>
            </Radio>
            <Radio value="business">
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Radio.Content>
                <Label>Business Plan</Label>
                <Description>Unlimited messages</Description>
              </Radio.Content>
            </Radio>
          </RadioGroup>
        </div>
      </div>

      <div>
        Form and form elements
        <div className="flex gap-3">
          <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>
            <div className="flex gap-2">
              <Button type="submit">Submit</Button>
              <Button type="reset" variant="secondary">
                Reset
              </Button>
            </div>
          </Form>
          <div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="input-type-email">Email</Label>
              <Input
                id="input-type-email"
                placeholder="jane@example.com"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="input-type-number">Age</Label>
              <Input
                id="input-type-number"
                min={0}
                placeholder="30"
                type="number"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="input-type-password">Password</Label>
              <Input
                id="input-type-password"
                placeholder="••••••••"
                type="password"
              />
            </div>
          </div>

          <Select className="w-[256px]" placeholder="Select one">
            <Label>State</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="florida" textValue="Florida">
                  Florida
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="delaware" textValue="Delaware">
                  Delaware
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="california" textValue="California">
                  California
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="texas" textValue="Texas">
                  Texas
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="new-york" textValue="New York">
                  New York
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="washington" textValue="Washington">
                  Washington
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <div className="flex flex-col gap-1">
            <Label htmlFor="input-type-textarea">Text Area</Label>
            <TextArea
              id="input-type-textarea"
              aria-label="Quick project update"
              className="h-32 w-96"
              placeholder="Share a quick project update..."
            />
          </div>

          <div className="flex flex-col gap-1">
            Input OTP Group
            <InputOTP maxLength={6}>
              <InputOTP.Group>
                <InputOTP.Slot index={0} />
                <InputOTP.Slot index={1} />
                <InputOTP.Slot index={2} />
              </InputOTP.Group>
              <InputOTP.Separator />
              <InputOTP.Group>
                <InputOTP.Slot index={3} />
                <InputOTP.Slot index={4} />
                <InputOTP.Slot index={5} />
              </InputOTP.Group>
            </InputOTP>
          </div>
        </div>
      </div>
    </section>
  );
}
