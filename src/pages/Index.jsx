// Mobile Application for Worker Accounting Time and Holidays
import { Box, Flex, Text, Button, Image, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaPlus, FaCalendarAlt, FaClock, FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
          Worker Time Tracker
        </Text>
        <IconButton icon={<FaSignOutAlt />} aria-label="Logout" variant="ghost" />
      </Flex>
      <Image src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b3JrZXIlMjBhdCUyMGRlc2t8ZW58MHx8fHwxNzEzOTM2MzY0fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" mt={4} mb={6} />

      <VStack spacing={4}>
        <Button leftIcon={<FaClock />} colorScheme="blue" w="full">
          Clock In/Out
        </Button>
        <Button leftIcon={<FaCalendarAlt />} colorScheme="green" w="full">
          View Calendar
        </Button>
        <Button leftIcon={<FaUserCircle />} colorScheme="purple" w="full">
          My Profile
        </Button>
        <Button leftIcon={<FaPlus />} colorScheme="teal" w="full">
          Add New Record
        </Button>
      </VStack>

      <HStack spacing={4} mt={8} justifyContent="center">
        <Text fontSize="sm">Powered by Company</Text>
        <FaClock />
      </HStack>
    </Box>
  );
};

export default Index;
