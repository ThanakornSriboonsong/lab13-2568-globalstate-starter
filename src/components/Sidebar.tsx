import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
export default function Sidebar() {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      <Box>
        <NavLink label="TodoCard" component={RouterNavLink} to="/" />
        <NavLink label="TodoTable" component={RouterNavLink} to="/todotable" />
      </Box>
      <Box p={10}>
        <Group>
          <Indicator
            inline
            size={12}
            offset={7}
            position="bottom-end"
            color="red"
            withBorder
          >
            <Avatar size="md" radius="xl" src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.6435-9/117403631_656666138534223_1576702068341507713_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFe0MZ9SnWBBgmK5ZFBwbGwDkYStvv0BYcORhK2-_QFh-TbVRAs9ddApUuvA2CZS8rvPUpQIQ9UCkiB5E74gAgQ&_nc_ohc=j_V1tz8AL2AQ7kNvwHlL_XA&_nc_oc=AdnK5aW0YWWSLawtoktieixfZOaXR9C4MyLW3Mw6kY8qVQo0IhWuidP_ySPy97e_LSM&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=gFQhKh91mzeTD0JpSDuF7g&oh=00_AfYFk6W7omZ-enDkH7kMvIx4pX43dY5g3akC-9LaK6kL4g&oe=68ECBC74"/>
          </Indicator>
          <Text component={RouterNavLink} to="/">
            User : Thanakorn : Student
          </Text>
        </Group>
      </Box>
    </Stack>
  );
}