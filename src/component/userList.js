import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Box, Paper, Typography, Divider } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import { UserList_Action } from "../redux_store/action/userList_Action";
import { useStyles } from "../style/userListStyle";
import { MailOutline, PhoneEnabledOutlined, FmdGoodOutlined, BorderColorOutlined, FavoriteBorderOutlined, Delete } from '@mui/icons-material';

export default function UserList() {
    const userList = useSelector((state) => state.productListData)
    const dispatch = useDispatch()
    const classes = useStyles()

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      useEffect(()=>{
        dispatch(UserList_Action('https://jsonplaceholder.typicode.com/users'))
      }, [dispatch])

      return (
    <Container maxWidth="lg" className={classes.container}>   
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6, md: 8 }}>
                {userList?.length > 0 && userList?.map((item, index) => (
                <Grid item xs={2} sm={2} md={2} key={item.id} className={classes.productList}>
                    <Item><img src={`https://avatars.dicebear.com/v2/avataaars/{{${item?.username}}}.svg?options[mood][]=happy`} className={classes.productImage} alt='avtar' />
                    <Typography className={classes.title}>{item?.name}</Typography>
                    <div className={classes.numberOfItem}>
                      <Typography className={classes.socialIcon}><MailOutline />{item?.email}</Typography>
                    </div>
                    <div className={classes.numberOfItem}>
                      <Typography className={classes.socialIcon}><PhoneEnabledOutlined />{item?.phone}</Typography>
                    </div>
                    <div className={`${classes.numberOfItem} ${classes.website}`}>
                      <Typography className={classes.socialIcon}><FmdGoodOutlined />{item?.website}</Typography>
                    </div>
                    <Divider />
                    <div className={classes.iconDiv}>
                      <FavoriteBorderOutlined className={classes.heartIcon} color='pink' />
                      <Divider orientation="vertical" flexItem />
                      <BorderColorOutlined className={classes.icon} />
                      <Divider orientation="vertical" flexItem />
                      <Delete className={classes.icon} />
                    </div>
                    </Item>
                </Grid>
            ))}
      </Grid>
    </Box>
    </Container>
  );
}