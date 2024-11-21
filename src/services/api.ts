const BASE_URL = 'https://api.portal.inexture.com/api/v1';

export const login = async (username: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer':'https://portal.inexture.com'
      },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getProfile = async (token: string) => {
  try {
    const response = await fetch(`${BASE_URL}/users/profile/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getTimeEntry = async (token: string) => {
  try {
    const response = await fetch(`${BASE_URL}/time-entry/my_live_time_entry?month=11&year=2024`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};


