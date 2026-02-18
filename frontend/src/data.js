// Demo data for Library Management System

export const demoMembers = [
    {
        _id: "1",
        name: "Rajesh Kumar",
        email: "rajesh@example.com",
        phone: "9876543210",
        status: "active",
        isAdmin: false,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        _id: "2",
        name: "Priya Singh",
        email: "priya@example.com",
        phone: "9876543211",
        status: "active",
        isAdmin: false,
        createdAt: "2024-01-16",
        updatedAt: "2024-01-16"
    },
    {
        _id: "3",
        name: "Amit Patel",
        email: "amit@example.com",
        phone: "9876543212",
        status: "inactive",
        isAdmin: false,
        createdAt: "2024-01-17",
        updatedAt: "2024-01-17"
    },
    {
        _id: "4",
        name: "Sneha Gupta",
        email: "sneha@example.com",
        phone: "9876543213",
        status: "active",
        isAdmin: false,
        createdAt: "2024-01-18",
        updatedAt: "2024-01-18"
    },
    {
        _id: "5",
        name: "Vikram Sharma",
        email: "vikram@example.com",
        phone: "9876543214",
        status: "active",
        isAdmin: false,
        createdAt: "2024-01-19",
        updatedAt: "2024-01-19"
    }
];

export const demoBooks = [
    {
        _id: "b1",
        type: "book",
        name: "The Great Gatsby",
        dateOfProcurement: "2023-05-10",
        quantity: 5,
        availableQuantity: 3,
        createdAt: "2023-05-10",
        updatedAt: "2024-02-18"
    },
    {
        _id: "b2",
        type: "book",
        name: "To Kill a Mockingbird",
        dateOfProcurement: "2023-06-15",
        quantity: 4,
        availableQuantity: 2,
        createdAt: "2023-06-15",
        updatedAt: "2024-02-18"
    },
    {
        _id: "b3",
        type: "book",
        name: "1984",
        dateOfProcurement: "2023-07-20",
        quantity: 6,
        availableQuantity: 4,
        createdAt: "2023-07-20",
        updatedAt: "2024-02-18"
    },
    {
        _id: "b4",
        type: "book",
        name: "Pride and Prejudice",
        dateOfProcurement: "2023-08-05",
        quantity: 3,
        availableQuantity: 1,
        createdAt: "2023-08-05",
        updatedAt: "2024-02-18"
    },
    {
        _id: "b5",
        type: "book",
        name: "The Catcher in the Rye",
        dateOfProcurement: "2023-09-12",
        quantity: 4,
        availableQuantity: 4,
        createdAt: "2023-09-12",
        updatedAt: "2024-02-18"
    }
];

export const demoMovies = [
    {
        _id: "m1",
        type: "movie",
        name: "Inception",
        dateOfProcurement: "2023-10-01",
        quantity: 2,
        availableQuantity: 1,
        createdAt: "2023-10-01",
        updatedAt: "2024-02-18"
    },
    {
        _id: "m2",
        type: "movie",
        name: "The Shawshank Redemption",
        dateOfProcurement: "2023-11-15",
        quantity: 3,
        availableQuantity: 2,
        createdAt: "2023-11-15",
        updatedAt: "2024-02-18"
    },
    {
        _id: "m3",
        type: "movie",
        name: "The Dark Knight",
        dateOfProcurement: "2023-12-20",
        quantity: 2,
        availableQuantity: 0,
        createdAt: "2023-12-20",
        updatedAt: "2024-02-18"
    },
    {
        _id: "m4",
        type: "movie",
        name: "Interstellar",
        dateOfProcurement: "2024-01-10",
        quantity: 3,
        availableQuantity: 2,
        createdAt: "2024-01-10",
        updatedAt: "2024-02-18"
    },
    {
        _id: "m5",
        type: "movie",
        name: "Forrest Gump",
        dateOfProcurement: "2024-02-01",
        quantity: 2,
        availableQuantity: 2,
        createdAt: "2024-02-01",
        updatedAt: "2024-02-18"
    }
];

export const demoIssueTransactions = [
    {
        _id: "t1",
        memberId: "1",
        memberName: "Rajesh Kumar",
        bookMovieId: "b1",
        itemName: "The Great Gatsby",
        itemType: "book",
        status: "issued",
        issuedDate: "2024-02-10",
        dueDate: "2024-02-24",
        returnDate: null,
        fine: 0,
        createdAt: "2024-02-10",
        updatedAt: "2024-02-10"
    },
    {
        _id: "t2",
        memberId: "2",
        memberName: "Priya Singh",
        bookMovieId: "b2",
        itemName: "To Kill a Mockingbird",
        itemType: "book",
        status: "overdue",
        issuedDate: "2024-02-05",
        dueDate: "2024-02-19",
        returnDate: null,
        fine: 40,
        createdAt: "2024-02-05",
        updatedAt: "2024-02-18"
    },
    {
        _id: "t3",
        memberId: "3",
        memberName: "Amit Patel",
        bookMovieId: "m1",
        itemName: "Inception",
        itemType: "movie",
        status: "returned",
        issuedDate: "2024-02-01",
        dueDate: "2024-02-08",
        returnDate: "2024-02-08",
        fine: 0,
        createdAt: "2024-02-01",
        updatedAt: "2024-02-08"
    },
    {
        _id: "t4",
        memberId: "4",
        memberName: "Sneha Gupta",
        bookMovieId: "b3",
        itemName: "1984",
        itemType: "book",
        status: "issued",
        issuedDate: "2024-02-12",
        dueDate: "2024-02-26",
        returnDate: null,
        fine: 0,
        createdAt: "2024-02-12",
        updatedAt: "2024-02-12"
    },
    {
        _id: "t5",
        memberId: "5",
        memberName: "Vikram Sharma",
        bookMovieId: "m2",
        itemName: "The Shawshank Redemption",
        itemType: "movie",
        status: "overdue",
        issuedDate: "2024-02-03",
        dueDate: "2024-02-10",
        returnDate: null,
        fine: 80,
        createdAt: "2024-02-03",
        updatedAt: "2024-02-18"
    },
    {
        _id: "t6",
        memberId: "1",
        memberName: "Rajesh Kumar",
        bookMovieId: "b4",
        itemName: "Pride and Prejudice",
        itemType: "book",
        status: "returned",
        issuedDate: "2024-01-28",
        dueDate: "2024-02-11",
        returnDate: "2024-02-11",
        fine: 0,
        createdAt: "2024-01-28",
        updatedAt: "2024-02-11"
    }
];

export const demoUsers = [
    {
        _id: "u1",
        userId: "admin1",
        userType: "admin",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01"
    },
    {
        _id: "u2",
        userId: "user1",
        userType: "user",
        createdAt: "2024-01-05",
        updatedAt: "2024-01-05"
    },
    {
        _id: "u3",
        userId: "librarian1",
        userType: "admin",
        createdAt: "2024-01-10",
        updatedAt: "2024-01-10"
    },
    {
        _id: "u4",
        userId: "user2",
        userType: "user",
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    }
];

export const demoStats = {
    totalMembers: demoMembers.length,
    totalBooks: demoBooks.length,
    totalMovies: demoMovies.length,
    totalQuantity: [...demoBooks, ...demoMovies].reduce((sum, item) => sum + item.quantity, 0),
    activeIssues: demoIssueTransactions.filter(t => t.status === "issued").length,
    overdueIssues: demoIssueTransactions.filter(t => t.status === "overdue").length,
    totalFines: demoIssueTransactions.filter(t => t.status === "overdue").reduce((sum, t) => sum + t.fine, 0),
    activeMembersCount: demoMembers.filter(m => m.status === "active").length
};

export const libraryInfo = {
    name: "Central Library Management System",
    address: "123 Main Street, City Center",
    phone: "1234567890",
    email: "library@example.com",
    hours: "9:00 AM - 6:00 PM",
    borrowingDays: 14,
    finePerDay: 10,
    maxBooksPerMember: 5,
    maxMoviesPerMember: 2
};

export const borrowingRules = [
    {
        id: 1,
        rule: "Maximum borrowing period is 14 days from date of issue"
    },
    {
        id: 2,
        rule: "Fine of ₹10 per day for overdue items"
    },
    {
        id: 3,
        rule: "Maximum 5 books and 2 movies per member at a time"
    },
    {
        id: 4,
        rule: "Membership is valid for 1 year from date of registration"
    },
    {
        id: 5,
        rule: "Lost items must be replaced or payment made at cost price"
    },
    {
        id: 6,
        rule: "Damaged items will be charged at 50% of the cost price"
    }
];

export const adminDashboardMenus = [
    {
        id: 1,
        title: "Maintenance",
        icon: "🔧",
        color: "bg-blue-50",
        description: "Manage members, books, movies, and users",
        link: "/admin/maintenance"
    },
    {
        id: 2,
        title: "Reports",
        icon: "📊",
        color: "bg-green-50",
        description: "View library statistics and reports",
        link: "/admin/reports"
    },
    {
        id: 3,
        title: "Transactions",
        icon: "📝",
        color: "bg-yellow-50",
        description: "Track book issues and returns",
        link: "/admin/transactions"
    }
];

export const userServiceMenus = [
    {
        id: 1,
        title: "Search Books/Movies",
        icon: "🔍",
        description: "Find available books and movies"
    },
    {
        id: 2,
        title: "My Issues",
        icon: "📕",
        description: "View your borrowed items"
    },
    {
        id: 3,
        title: "Overdue Items",
        icon: "⏰",
        description: "Check overdue items and fines"
    },
    {
        id: 4,
        title: "Pay Fine",
        icon: "💳",
        description: "Pay outstanding fines"
    }
];
