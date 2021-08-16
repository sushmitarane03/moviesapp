
    import React from 'react';
    
    import { makeStyles } from '@material-ui/core/styles';
    import { Card,Checkbox,Typography,InputLabel ,FormControl,Input,ListItemText,  Select,MenuItem ,TextField , Button, CardContent} from'@material-ui/core';
     import genres from'./screens/home/Genre.js';
     import artists from './screens/home/Artists.js';
     
   
    
      const useStyles = makeStyles((theme) => ({
        
        root: {
         display: 'flex',
         width:'25ch',
          margin: theme.spacing(1),
        minWidth:'240',
       maxWidth:'240',
        },
        container: {
          display: 'flex',
          minWidth: '240',
          maxWidth:'240',
          flexWrap:'wrap',
        },
        title:{
          color: theme.palette.primary.light,
          marginLeft: 10,
       
        },
        Control: {
          margin: theme.spacing(1),
          minWidth: '240',
          maxWidth:'240',
        },
      
        textField: {
       marginLeft: theme.spacing(1),
       marginRight: theme.spacing(1),
      width: 200,
      
      },
     
     
      apply: {
        display: 'flex',
        flexDirection: 'column',
        padding:'25',
        
      },
    
    }));
    const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
     function Form(props) {
    const classes = useStyles();
    
  
      return (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              FIND MOVIES BY:
            </Typography>
        <form  className={classes.root} noValidate autoComplete="off"> 
        
          
          <TextField id="standard-basic" label="Movie Name" />
          </form>
        
          <div>
          <FormControl className={classes.Control} >
         
         <InputLabel id="demo-multiple-checkbox-label">Genres</InputLabel>
        <Select
          name="demo-multiple-Checkbox-label"
          id="demo-multiple-Checkbox"
          multiple value={props.genre}
          value={props.genre}
          onChange={props.handleGenreChange}
          input={<Input />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {genres.map((names) => (
            <MenuItem key={names.name} value={names.name}>
              <Checkbox checked={props.genre.indexOf(names.name) > -1} />
              <ListItemText primary={names.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      <div className={classes.Control}>
      <FormControl className={classes.Control}>
        <InputLabel id="demo-mutiple-checkbox-label">Artists</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={props.artist}
          onChange={props.handleArtistChange}
          input={<Input />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {artists.map((names) => (
            <MenuItem
              key={names.first_name + names.last_name}
              value={names.first_name + names.last_name}
            >
              <Checkbox
                checked={
                  props.artist.indexOf(names.first_name + names.last_name) >
                  -1
                }
              />
              <ListItemText
                primary={names.first_name + " " + names.last_name}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          </div>
          
           <form className={classes.container} noValidate>
           <TextField
            className={classes.textField}
    id="date"
    label="Release Date Start"
    type="date"
    defaultValue="yyyy-mm-dd"
   
    InputLabelProps={{
      shrink: true,
    }}
  />
  </form>
  <form className={classes.container} noValidate styles={{marginTop: "8px"}}>
  <TextField className={classes.textField}
    id="date"
    label="Release Date End"
    type="date"
    defaultValue="yyyy-mm-dd"
   
    InputLabelProps={{
      shrink: true,
    }}
  />
  </form>

 
    </CardContent>
    <div className={classes.apply}>
  <Button 
  variant="contained" 
  color="primary" 
  onClick={props.handleFilter} >
       APPLY
      </Button>
  </div>
  </Card>
  


    
     );
   }
    
   export default Form;