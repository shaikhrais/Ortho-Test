CREATE TABLE IF NOT EXISTS joints (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tests (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    joint TEXT NOT NULL,
    purpose TEXT,
    protocol TEXT,
    positive TEXT,
    negative TEXT,
    youtubeUrl TEXT,
    thumbnailUrl TEXT,
    youtubeUser TEXT,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS joints_structure (
    id INTEGER PRIMARY KEY,
    joint_id INTEGER,
    joint_name TEXT,
    structure_id INTEGER,
    structure_name TEXT,
    category_name TEXT,
    relationship TEXT,
    injury_frequency TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    test_in_1 TEXT,
    test_in_2 TEXT,
    test_out_1 TEXT,
    nerve_test_1 TEXT,
    nerve_test_2 TEXT,
    nerve_test_3 TEXT
);

CREATE INDEX IF NOT EXISTS idx_tests_joint ON tests(joint);
CREATE INDEX IF NOT EXISTS idx_js_joint ON joints_structure(joint_name);

CREATE TABLE IF NOT EXISTS update_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    test_id INTEGER NOT NULL,
    field_name TEXT NOT NULL,
    old_value TEXT,
    new_value TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(test_id) REFERENCES tests(id)
);
