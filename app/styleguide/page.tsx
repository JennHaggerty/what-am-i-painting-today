"use client";

import {
  Divider,
  Badge,
  Avatar,
  User,
  Alert,
  Code,
  Snippet,
  Accordion,
  AccordionItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Skeleton,
  Tabs,
  Tab,
  Breadcrumbs,
  BreadcrumbItem,
  Pagination,
  ScrollShadow,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Tooltip,
  addToast,
  Kbd,
  Switch,
  CircularProgress,
  Progress,
  Slider,
  Calendar,
  RangeCalendar,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  DateInput,
  NumberInput,
  TimeInput,
  Select,
  SelectItem,
  Textarea,
  InputOtp,
  Form,
  Image,
  Input,
} from "@heroui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { today, getLocalTimeZone } from "@internationalized/date";
import MoonIcon from "../components/Icons/MoonIcon";
import PhotoIcon from "../components/Icons/PhotoIcon";
import SunIcon from "../components/Icons/SunIcon";
import HeaderNav from "../components/HeaderNav";
import strings from "../strings";

export default function Page() {
  const [value, setValue] = useState(0);
  const [action, setAction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>();

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
  ];

  const horizontalClassname = "flex flex-wrap gap-4";

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col gap-4">
      <HeaderNav />
      <h2 className="text-center text-2xl uppercase">{strings.styleguide}</h2>

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

      <div className={horizontalClassname}>
        <Divider className="w-1/2" />
        <div className="flex h-5 items-center space-x-4 text-small">
          <div>vertical</div>
          <Divider orientation="vertical" />
          <div>divider</div>
        </div>
      </div>

      <div className={horizontalClassname}></div>

      <div className={horizontalClassname}>
        <Badge content="5">
          <Avatar src="image.png" />
        </Badge>
        <Avatar name="Image" />

        <User
          avatarProps={{
            src: "image.png",
          }}
          description="Product Designer"
          name="Jane Doe"
        />

        <PhotoIcon height={"150px"} />

        <Image src="/image.png" height={"150px"} alt="default image" />
      </div>

      <Alert description={"alert description"} title={"Alert element"} />
      <Code size="sm">npm install @heroui/react</Code>
      <Snippet>npm install @heroui/react</Snippet>

      <div className={horizontalClassname}>
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent}
          </AccordionItem>
        </Accordion>

        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Card className="w-[200px] space-y-5 p-4" radius="lg">
          <CardHeader>Card header</CardHeader>
          <CardBody>Card body</CardBody>
          <CardFooter>Card footer</CardFooter>
        </Card>

        <Card className="w-[200px] space-y-5 p-4" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300" />
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300" />
            </Skeleton>
          </div>
        </Card>

        <Tabs aria-label="Options" fullWidth>
          <Tab key="photos" title="Photos">
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="Music">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="Videos">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>

        <Breadcrumbs className="w-full">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Music</BreadcrumbItem>
          <BreadcrumbItem>Artist</BreadcrumbItem>
          <BreadcrumbItem>Album</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </Breadcrumbs>

        <Pagination initialPage={1} total={10} className="w-full" />

        <ScrollShadow className="w-full h-[150px]">
          {defaultContent}
          {defaultContent}
          {defaultContent}
          {defaultContent}
          {defaultContent}
        </ScrollShadow>

        <div className="flex flex-col gap-2">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Open Menu</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Button onPress={() => setIsDrawerOpen(!isDrawerOpen)}>
            Open Drawer
          </Button>
          <Drawer
            isOpen={isDrawerOpen}
            onOpenChange={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <DrawerContent>
              {(onClose) => (
                <>
                  <DrawerHeader className="flex flex-col gap-1">
                    Drawer Title
                  </DrawerHeader>
                  <DrawerBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor
                      cupidatat consequat elit dolor adipisicing. Mollit dolor
                      eiusmod sunt ex incididunt cillum quis. Velit duis sit
                      officia eiusmod Lorem aliqua enim laboris do dolor
                      eiusmod. Et mollit incididunt nisi consectetur esse
                      laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                      deserunt nostrud ad veniam.
                    </p>
                  </DrawerBody>
                  <DrawerFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </DrawerFooter>
                </>
              )}
            </DrawerContent>
          </Drawer>

          <Button onPress={() => setIsModalOpen(!isModalOpen)}>
            Open Modal
          </Button>
          <Modal
            isOpen={isModalOpen}
            onOpenChange={() => setIsModalOpen(!isModalOpen)}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Modal Title
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor
                      cupidatat consequat elit dolor adipisicing. Mollit dolor
                      eiusmod sunt ex incididunt cillum quis. Velit duis sit
                      officia eiusmod Lorem aliqua enim laboris do dolor
                      eiusmod. Et mollit incididunt nisi consectetur esse
                      laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                      deserunt nostrud ad veniam.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>

          <Popover placement="right">
            <PopoverTrigger>
              <Button>Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold">Popover Content</div>
                <div className="text-tiny">This is the popover content</div>
              </div>
            </PopoverContent>
          </Popover>

          <Tooltip content="I am a tooltip">
            <Button>Tooltip</Button>
          </Tooltip>
        </div>

        <div className="flex flex-col gap-2">
          {[
            "Default",
            "Primary",
            "Secondary",
            "Success",
            "Warning",
            "Danger",
          ].map((color) => (
            <Button
              key={color}
              color={color.toLowerCase()}
              variant={"flat"}
              onPress={() =>
                addToast({
                  title: "Toast title",
                  description: "Toast displayed successfully",
                  color: color.toLowerCase(),
                })
              }
            >
              {color}
            </Button>
          ))}
          {[
            ["Solid", "solid"],
            ["Bordered", "bordered"],
            ["Flat", "faded"],
          ].map((variant) => (
            <Button
              key={variant[0]}
              // @ts-ignore
              variant={variant[1]}
              onPress={() =>
                addToast({
                  title: "Toast title",
                  description: "Toast displayed successfully",
                  // @ts-ignore
                  variant: variant[0].toLowerCase(),
                  color: "secondary",
                })
              }
            >
              {variant[0]}
            </Button>
          ))}
        </div>
      </div>

      <div className={horizontalClassname}>
        <Kbd keys={["command"]}>K</Kbd>
        <Kbd keys={["command", "shift"]}>N</Kbd>
        <Kbd keys={["option", "command"]}>P</Kbd>

        <Switch
          defaultSelected
          color="secondary"
          size="lg"
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <SunIcon className={className} />
            ) : (
              <MoonIcon className={className} />
            )
          }
        >
          Dark mode
        </Switch>
      </div>

      <div className={horizontalClassname}>
        <div className="w-full flex gap-4">
          <CircularProgress aria-label="Loading..." size="sm" />
          <CircularProgress label="Loading..." />
          <CircularProgress
            aria-label="Loading..."
            color="warning"
            showValueLabel={true}
            size="lg"
            value={value}
          />
          <CircularProgress
            color="success"
            formatOptions={{ style: "unit", unit: "kilometer" }}
            label="Speed"
            showValueLabel={true}
            size="lg"
            value={70}
          />
        </div>

        <Progress aria-label="Loading..." className="max-w-md" value={60} />
        <Progress
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md"
          size="sm"
        />
        <Progress
          isStriped
          aria-label="Loading..."
          className="max-w-md"
          color="secondary"
          value={60}
        />
        <Progress className="max-w-md" label="Loading..." value={55} />
        <Progress
          aria-label="Downloading..."
          className="max-w-md"
          color="success"
          showValueLabel={true}
          size="md"
          value={value}
        />
        <Progress
          className="max-w-md"
          color="warning"
          formatOptions={{ style: "currency", currency: "ARS" }}
          label="Monthly expenses"
          maxValue={10000}
          showValueLabel={true}
          size="sm"
          value={4000}
        />

        <Slider
          className="max-w-md"
          defaultValue={0.4}
          label="Temperature"
          maxValue={1}
          minValue={0}
          step={0.01}
        />
        <Slider
          className="max-w-md"
          color="foreground"
          defaultValue={0.2}
          label="Temperature"
          maxValue={1}
          minValue={0}
          showSteps={true}
          size="sm"
          step={0.1}
        />
        <Slider
          className="max-w-md"
          color="foreground"
          defaultValue={20}
          label="Select a value"
          marks={[
            {
              value: 20,
              label: "20%",
            },
            {
              value: 50,
              label: "50%",
            },
            {
              value: 80,
              label: "80%",
            },
          ]}
          size="sm"
          step={10}
        />
        <Slider
          className="max-w-md"
          color="foreground"
          defaultValue={20}
          label="Select a value"
          marks={[
            {
              value: 20,
              label: "20%",
            },
            {
              value: 50,
              label: "50%",
            },
            {
              value: 80,
              label: "80%",
            },
          ]}
          size="sm"
          step={10}
        />
        <Slider
          className="max-w-md"
          defaultValue={[100, 500]}
          formatOptions={{ style: "currency", currency: "USD" }}
          label="Price Range"
          maxValue={1000}
          minValue={0}
          step={50}
        />
        <Slider
          className="max-w-md"
          color="warning"
          defaultValue={1.5}
          fillOffset={0}
          formatOptions={{ signDisplay: "always" }}
          label="Exposure"
          maxValue={5}
          minValue={-5}
          size="sm"
          step={0.01}
        />
        <Slider
          className="max-w-md"
          defaultValue={0.2}
          formatOptions={{ style: "percent" }}
          label="Select a value"
          marks={[
            {
              value: 0.2,
              label: "20%",
            },
            {
              value: 0.5,
              label: "50%",
            },
            {
              value: 0.8,
              label: "80%",
            },
          ]}
          maxValue={1}
          minValue={0}
          showTooltip={true}
          step={0.1}
        />
        <Slider
          aria-label="Temperature"
          className="max-w-md"
          color="foreground"
          defaultValue={0.2}
          maxValue={1}
          minValue={0}
          showOutline={true}
          size="sm"
          step={0.01}
        />
        <Slider
          aria-label="Volume"
          className="max-w-md"
          color="primary"
          defaultValue={40}
          endContent={<MoonIcon className="text-2xl" />}
          size="lg"
          startContent={<SunIcon className="text-2xl" />}
        />
      </div>

      <div className={horizontalClassname}>
        <div>
          <Calendar />

          <RangeCalendar
            aria-label="Date (Uncontrolled)"
            defaultValue={{
              start: today(getLocalTimeZone()),
              end: today(getLocalTimeZone()).add({ weeks: 1 }),
            }}
          />
        </div>
        <div>
          <CheckboxGroup
            defaultValue={["buenos-aires", "london"]}
            label="Select cities"
          >
            <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
            <Checkbox value="sydney">Sydney</Checkbox>
            <Checkbox value="san-francisco">San Francisco</Checkbox>
            <Checkbox value="london">London</Checkbox>
            <Checkbox value="tokyo">Tokyo</Checkbox>
          </CheckboxGroup>

          <RadioGroup label="Select your favorite city">
            <Radio value="buenos-aires">Buenos Aires</Radio>
            <Radio value="sydney">Sydney</Radio>
            <Radio value="san-francisco">San Francisco</Radio>
            <Radio value="london">London</Radio>
            <Radio value="tokyo">Tokyo</Radio>
          </RadioGroup>
        </div>
        <div className="flex flex-wrap gap-4">
          <DateInput className="max-w-sm" label={"Birth date"} />

          <NumberInput
            className="max-w-xs"
            placeholder="Enter the amount"
            label="Number input"
          />

          <TimeInput className="max-w-xs" label="Event Time" />

          <Select className="max-w-xs" label="Select an animal">
            {animals.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
          <Select
            className="max-w-xs"
            label="Favorite Animal"
            placeholder="Select an animal"
          >
            {animals.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
          <Textarea
            className="max-w-xs"
            label="Description"
            placeholder="Enter your description"
          />

          <InputOtp length={4} value={"0123"} />
        </div>

        <Form
          className="w-full max-w-xs flex flex-col gap-4"
          onReset={() => setAction("reset")}
          onSubmit={(e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));

            setAction(`submit ${JSON.stringify(data)}`);
          }}
        >
          <Input
            isRequired
            errorMessage="Please enter a valid username"
            label="Username"
            labelPlacement="outside"
            name="username"
            placeholder="Enter your username"
            type="text"
          />

          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
          <div className="flex gap-2">
            <Button color="primary" type="submit">
              Submit
            </Button>
            <Button type="reset" variant="flat">
              Reset
            </Button>
          </div>
          {action && (
            <div className="text-small text-default-500">
              Action: <code>{action}</code>
            </div>
          )}
        </Form>
      </div>
    </section>
  );
}
